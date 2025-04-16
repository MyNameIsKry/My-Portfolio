"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
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

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

interface TiltProps {
  children: React.ReactNode;
}

const Tilt: React.FC<TiltProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className=""
    >
      {children}
    </motion.div>
  );
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
            >
              <Tilt>
                <div className="relative h-full min-h-[220px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 hover:border-sky-500 rounded-2xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute top-4 right-4 text-gray-300 text-sm">
                    ⭐ {repo.stargazers_count}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{repo.name}</h3>
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
                  <div className="absolute bottom-4 right-4 text-gray-300 text-sm">
                    {repo.language || "Unknown"}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
