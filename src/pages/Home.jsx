import { useState, useMemo } from "react";
import ProfileCard from "../components/ProfileCard";
import SocialCard from "../components/SocialCard";
import socialLinks from "../data/socialLinks";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // ✅ Stable rain items (generated once)
  const rainItems = useMemo(() => {
    return [...Array(70)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      text: ["0", "1", "</>", "{ }", "npm", "JS", "⚛", "React", "Node"][
        Math.floor(Math.random() * 9)
      ],
    }));
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#0f0f0f] overflow-hidden"
    >
      {/* Tech Falling Background */}
      <div className="tech-rain absolute inset-0 pointer-events-none overflow-hidden">
        {rainItems.map((item) => (
          <span
            key={item.id}
            style={{
              left: `${item.left}%`,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 py-10">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg space-y-6">
          <ProfileCard />

          <div className="flex flex-col gap-4">
            {socialLinks.map((link, index) => (
              <SocialCard
                key={index}
                name={link.name}
                url={link.url}
                icon={link.icon}
              />
            ))}

            <a
              href="https://techportfolio-gamma.vercel.app/m"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-purple-600 text-white py-2.5 sm:py-3 rounded-xl text-center font-semibold 
              hover:bg-purple-700 transition duration-300 text-sm sm:text-base"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;