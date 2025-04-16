"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Octokit } from "octokit"

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
})

const selectedRepos: Record<string, boolean> = {
  "NoName-Forum": true,
  "open-english-vn": true,
  "Pet-Shop": true,
};

export default function ProjectTimeline() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    octokit
      .paginate("GET /users/{username}/repos", {
        username: "MyNameIsKry",
        per_page: 100,
      })
      .then((allRepos) => {
        const filtered = allRepos.filter(repo => selectedRepos[repo.name]);
        setRepos(filtered);
      });
  }, []);

  return (
    <div id="projects">
      <div className="text-center text-3xl font-bold mt-10 text-white">
        Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 hover:border-sky-500 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-1">
              {repo.name}
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              {repo.description || "No description provided."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-400 hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
