import React from 'react';
import {
  SiLinkedin,
  SiGithub,
  SiGmail,
  SiDiscord
} from "react-icons/si";
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <SiGithub />,
      url: "https://github.com/MyNameIsKry",
      label: "GitHub"
    },
    {
      icon: <SiLinkedin />,
      url: "https://www.linkedin.com/in/my-name-is-kry/",
      label: "LinkedIn"
    },
    {
      icon: <SiGmail />,
      url: "mailto:thucduydev72@gmail.com",
      label: "Email"
    },
    {
      icon: <SiDiscord />,
      url: "https://discord.com/users/1259350604526911509",
      label: "Discord"
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-transparent text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center gap-8 space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                <span className="text-4xl">{link.icon}</span>
              </motion.a>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kilious Kry. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Made with ❤️ using React & TypeScript & Frame Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
