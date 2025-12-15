import React, { useEffect, useState, useRef } from "react";
import "./StatsSection.css";
import peopleIcon from "../../assets/icons/streamline-ultimate_human-resources-search-employees-bold (1).png";
import clipboardIcon from "../../assets/icons/Vector (5).png";
import globeIcon from "../../assets/icons/mingcute_earth-2-line.png";


function StatsSection() {
  const [stats, setStats] = useState({
    experts: 0,
    platforms: 0,
    clients: 0,
  });
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  const targets = { experts: 118, platforms: 900, clients: 99 };
  const duration = 2500; // total duration in ms
  const frameRate = 15; // ~60fps
  const steps = duration / frameRate;
  const easeOutQuad = (t) => t * (2 - t);

  const startAnimation = () => {
    let currentStep = 0;
    clearInterval(animationRef.current);
    animationRef.current = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        experts: Math.floor(targets.experts * easeOutQuad(progress)),
        platforms: Math.floor(targets.platforms * easeOutQuad(progress)),
        clients: Math.floor(targets.clients * easeOutQuad(progress)),
      });

      if (progress >= 1) clearInterval(animationRef.current);
    }, frameRate);
  };

  const resetStats = () => {
    clearInterval(animationRef.current);
    setStats({ experts: 0, platforms: 0, clients: 0 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          resetStats();
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearInterval(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-box">
          <div className="row align-items-center">
            {/* LEFT TEXT */}
            <div className="col-lg-4 col-md-12 text-lg-start text-center mb-4 mb-lg-0">
              <h2 className="stats-title">WBF Steel</h2>
              <p className="stats-subtitle">Detailing in Numbers</p>
              <a href="#" className="get-in-touch">
                Get in Touch <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>

            {/* RIGHT STATS */}
            <div className="col-lg-8 col-md-12">
              <div className="stats-grid">
                {/* Row 1 */}
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-header">
                     <img src={peopleIcon} alt="Experts" className="stats-icon" />
                      <h3>{stats.experts} <span>+</span></h3>
                    </div>
                    <p>EXPERT EMPLOYED</p>
                  </div>

                  <div className="vertical-line"></div>

                  <div className="stat-item">
                    <div className="stat-header">
                        <img src={clipboardIcon} alt="Platforms" className="stats-icon" />
                      <h3>{stats.platforms} <span>+</span></h3>
                    </div>
                    <p>WORK PLATFORMS</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="stats-row single">
                  <div className="stat-item">
                    <div className="stat-header">
                        <img src={globeIcon} alt="Clients" className="stats-icon" />
                      <h3>{stats.clients} <span>+</span></h3>
                    </div>
                    <p>CLIENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
