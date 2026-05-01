import { useEffect, useState } from "react";

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const elem = document.getElementById("work");
      if (elem) {
        const threshold = elem.getBoundingClientRect().top;
        setIsActive(scrollY > threshold);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="techstack section-container" id="expertise" style={{ padding: '120px 0', position: 'relative', zIndex: 10, minHeight: '60vh' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h3 style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--accentColor)', letterSpacing: '2px', textTransform: 'uppercase', position: 'relative', zIndex: 20 }}>My Expertise</h3>
      </div>

      <div className="expertise-grid" style={{
        display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 20
      }}>
        {["Full-Stack Developer", "Agentic AI Engineer", "Cyber Security", "Robotic Engineering", "WordPress", "SEO", "Graphic Design", "Video Editing", "Digital Marketing", "E-commerce Support"].map((skill, index) => (
          <div key={`${skill}-${index}`} style={{
            padding: '15px 30px', 
            background: 'var(--backgroundColor)', 
            border: '2px solid var(--accentColor)', 
            borderRadius: '50px', 
            color: 'var(--accentColor)', 
            fontSize: '1.2rem', 
            fontWeight: '600',
            boxShadow: '0 0 5px rgba(20, 184, 166, 0.3)'
          }}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
