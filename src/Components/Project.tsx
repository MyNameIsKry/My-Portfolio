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
        <>
            <div className="text-center text-3xl font-bold mt-10">
                Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                {repos.slice(0, 6).map((repo, index) => (
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
        </>
    );
}
