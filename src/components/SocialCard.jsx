

import { ArrowUpRight } from "lucide-react";

const SocialCard = ({ name, url, icon: Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex items-center justify-between
        w-full
        px-5 py-4
        rounded-2xl
        backdrop-blur-lg
        bg-white/10
        border border-white/20
        text-white
        hover:bg-white/20
        hover:scale-[1.02]
        transition-all duration-300
        shadow-lg hover:shadow-purple-500/20
      "
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <Icon className="w-6 h-6 text-purple-400 group-hover:text-white transition" />
        )}
        <span className="font-medium tracking-wide">
          {name}
        </span>
      </div>

      <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
    </a>
  );
};



export default SocialCard;

// ----------


