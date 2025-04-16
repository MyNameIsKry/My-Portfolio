"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

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
        const filtered = allRepos.filter((repo: any) => selectedRepos[repo.name]);
        setRepos(filtered as Repo[]);
      });
  }, []);

  return (
    <div id="projects" className="bg-[#0f1117] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wider text-white">
            Projects
          </h2>
          <p className="mt-4 text-gray-400">
            A selection of my best projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 hover:border-sky-500 rounded-2xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute top-4 right-4 text-gray-300 text-sm">
                ⭐ {repo.stargazers_count}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {repo.name}
              </h3>
              <p className="text-gray-400 text-sm mb-12">
                {repo.description || "No description provided."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 text-sm text-sky-400 hover:underline"
              >
                View on GitHub →
              </a>
              <div className="absolute bottom-4 right-4 text-gray-300 text-xs">
                {repo.language || "Unknown"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
