function SplashLoader() {
  return (
    <div className="lg:grid lg:grid-cols-[20vw,1fr,20vw]">
      <div className="splash-loader-container flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[#23313d] z-50">
        {/* Your animated loader */}
        <div className="glow-dot animate-ping  rounded-full relative w-24 h-24">
          <img
            src="././assets/splash.svg"
            alt="Swiftbet"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#FFD600] rounded-full animate-growGlow opacity-30"></div>
        </div>
      </div>
    </div>
  );
}

export default SplashLoader;
