import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', width: '100%', marginTop: '0px' }}>
        <div className="about-image" style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', transform: 'translateY(75px)' }}>
          <img src="/images/about_image.png" alt="Huma Qureshi Full Body" style={{ maxWidth: '400px', width: '100%', borderRadius: '20px', objectFit: 'contain' }} />
        </div>
        <div className="about-me" style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 className="title" style={{ marginTop: '0px', fontWeight: '800', letterSpacing: '1px' }}>About Me</h3>
          <p className="para">
            Myself Huma Qureshi, I'm a WordPress developer and consultant specializing in lead-generation sites and membership/E-learning platforms. I don't just take orders—I partner with you to achieve your business goals. I have been working as a freelancer with a diverse skill set. Over the past few years, I have worked for many international and local clients. One of my greatest passions is "SEO and WordPress". Let's create an exceptional online presence that drives success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
