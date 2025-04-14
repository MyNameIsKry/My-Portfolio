"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
};

export default function ProjectTimeline() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/MyNameIsKry/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto px-6 py-16">
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-zinc-700" />

      <div className="flex flex-col gap-24 pl-14">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[31px] top-1 w-4 h-4 bg-zinc-900 border-2 border-sky-400 rounded-full shadow-sm" />

            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800 hover:border-sky-500 transition duration-200">
              <p className="text-xs text-gray-400 mb-1 tracking-wide">
                {new Date(repo.created_at).toLocaleDateString()}
              </p>
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
