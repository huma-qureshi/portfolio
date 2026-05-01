import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // Max 15 degrees tilt
      const y = (e.clientY / innerHeight - 0.5) * -30;
      containerRef.current.style.transform = `translateX(-50%) perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              HUMA
              <br />
              <span>QURESHI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Professional</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1" style={{ color: "white" }}>AI Developer</div>
              <div className="landing-h2-2">
                <span style={{ color: "inherit" }}>&amp;</span>{" "}
                <span style={{ color: "white" }}>Marketing</span>
              </div>
            </h2>
          </div>
        </div>
        {children}
        <div 
          ref={containerRef}
          className="landing-robot-container" 
          style={{ position: 'absolute', bottom: '-15%', left: '50%', transform: 'translateX(-50%) perspective(1000px) rotateY(0deg) rotateX(0deg)', zIndex: 0, width: '100%', maxWidth: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none', transition: 'transform 0.1s ease-out' }}
        >
          <div className="character-rim" style={{ opacity: 1, animation: 'none', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', position: 'absolute', zIndex: -1 }}></div>
          <img src="/images/typing_image.png" alt="Huma Qureshi" className="landing-floating-img" style={{ maxWidth: '100%', height: 'auto', borderRadius: '30px' }} />
        </div>
      </div>
    </>
  );
};

export default Landing;
