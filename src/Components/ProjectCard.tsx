interface Props {
    name: string;
    description: string;
    html_url: string;
  }
  
  export default function ProjectCard({ name, description, html_url }: Props) {
    return (
      <div className="border border-gray-700 rounded p-6 bg-[#1f1f23]">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description || "No description"}</p>
        <a
          href={html_url}
          target="_blank"
          className="text-blue-400 mt-4 inline-block"
        >
          View on GitHub →
        </a>
      </div>
    );
  }
  