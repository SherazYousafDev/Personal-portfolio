

const name = "Sheraz Yousaf"; 

const LoadingScreen = ({ hidden }) => {
  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-t-[#FF0055] border-white/20 rounded-full animate-spin mb-6"></div>

      {/* Name Animation */}
      <div className="flex space-x-2 text-white text-xl md:text-5xl font-black uppercase tracking-widest">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block opacity-0"
            style={{
              animation: `fadeInUp 0.3s ease forwards`, // faster animation
              animationDelay: `${index * 0.05}s`, // faster letter spacing
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

      {/* Inline Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
