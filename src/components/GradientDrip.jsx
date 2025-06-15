const GradientDrip = () => {
  return (
    <div className="relative h-[400px] mx-4 md:mx-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Organic flowing gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Main flowing shape */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120%] h-[300px] opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 600px 300px at center top, rgba(139, 92, 246, 0.3) 0%, rgba(167, 139, 250, 0.2) 30%, rgba(196, 181, 253, 0.1) 60%, transparent 80%)",
            clipPath:
              "polygon(20% 0%, 80% 0%, 95% 40%, 85% 70%, 70% 85%, 50% 95%, 30% 85%, 15% 70%, 5% 40%)",
          }}
        />

        {/* Secondary organic layer */}
        <div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[100%] h-[250px] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 500px 250px at center top, rgba(139, 92, 246, 0.4) 0%, rgba(167, 139, 250, 0.25) 40%, rgba(196, 181, 253, 0.1) 70%, transparent 90%)",
            clipPath:
              "polygon(25% 0%, 75% 0%, 90% 35%, 88% 65%, 75% 80%, 50% 90%, 25% 80%, 12% 65%, 10% 35%)",
          }}
        />

        {/* Core bright center */}
        <div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[80%] h-[200px] opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 400px 200px at center top, rgba(139, 92, 246, 0.5) 0%, rgba(167, 139, 250, 0.3) 35%, rgba(196, 181, 253, 0.15) 65%, transparent 85%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 85% 30%, 82% 60%, 68% 75%, 50% 85%, 32% 75%, 18% 60%, 15% 30%)",
          }}
        />

        {/* Soft blur overlay for smoothness */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-100/20 via-violet-50/10 to-transparent blur-2xl" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center pt-32 px-4 font-sans">
        <div className="flex items-center-safe justify-center gap-2 mb-3">
          <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
          <p className="text-lg text-zinc-500 font-semibold">AI Avatars</p>
        </div>
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent tracking-tighter">
          Cast Your Avatar.
        </h2>

        <p className="text-3xl font-semibold text-gray-800 max-w-2xl mx-auto tracking-tighter">
          Clone Yourself, Pick a Stock Avatar or Generate a New Avatar with AI.
        </p>
      </div>
    </div>
  );
};

export default GradientDrip;
