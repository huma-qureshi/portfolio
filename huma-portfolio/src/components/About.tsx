
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div
        className="about-content-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >

        {/* IMAGE */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end", // ?? image neeche
          }}
        >
          <img
            src="/images/about_image.png" // ?? apni image ka exact naam
            alt="Huma Qureshi Full Body"
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "auto",
              objectFit: "contain",
              display: "block",
               transform: "translateY(170px)", // 👈 🔥 FINAL FIX (neeche move)

              // ? remove blue shadow
              boxShadow: "none",
              filter: "none",
              background: "transparent",
            }}
          />
        </div>

        {/* TEXT */}
        <div
          className="about-me"
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <h3 className="title">About Me</h3>

          <p className="para">
            Myself Huma Qureshi, I'm a WordPress developer and consultant specializing in lead-generation sites and membership/E-learning platforms. I don't just take orders—I partner with you to achieve your business goals. I have been working as a freelancer with a diverse skill set. Over the past few years, I have worked for many international and local clients. One of my greatest passions is "SEO and WordPress". Let's create an exceptional online presence that drives success!
          </p>
        </div>

      </div>
    </div>
  );
};


export default About;