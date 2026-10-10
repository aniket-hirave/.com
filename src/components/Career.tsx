import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Engineering</h4>
                <h5>Government Polytechnic Awasari Khurd Pune</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Passed with First Class with Distinction and an aggregate of 91.59%. Focusing on object-oriented programming, data structures, algorithms, operating systems, databases, and core web technologies. Active explorer of software design and development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
