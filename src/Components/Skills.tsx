"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiMysql,
  SiNestjs,
  SiMongodb,
  SiSqlite,
  SiJavascript,
  SiDotnet,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = {
  "Programming Laguages": [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: ".Net", icon: SiDotnet },
  ],
  "Frontend": [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
  ],
  "Backend": [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Fastify", icon: SiFastify },
    { name: "NestJs", icon: SiNestjs}
  ],
  "Databases": [
    { name: "MySql", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQLite", icon: SiSqlite },
    { name: "Prisma", icon: SiPrisma },
  ],
  "Tools": [
    { name: "Github", icon: SiGithub },
    { name: "Git", icon: SiGit },
    { name: "Postman", icon: SiPostman },
  ],
  "CI/CD": [
    { name: "Docker", icon: SiDocker },
  ]
};

export default function Skills() {
  return (
    <section className="bg-[#111317] py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-sky-400 capitalize">{category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {items.map(({ name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="text-5xl text-white group-hover:text-sky-400 transition-colors duration-300" />
                    <span className="mt-2 text-gray-300 text-sm">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
