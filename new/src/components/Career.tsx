import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design & Marketing Entrepreneur</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Managed daily operations of a growing design and marketing business. Coordinated customer orders, handled social media branding, and developed strategies to increase online presence and sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
