import React, { useState, useEffect } from "react";
import "../styles/stats.css"; // Adjust path if needed

const Stats = () => {

  const [counts, setCounts] = useState({
    tools: 0,
    machines: 0,
    offices: 0,
  });

  const targetCounts = {
    tools: 34,
    machines: 76,
    offices: 8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    });

    const statsSection = document.querySelector(".stats-grid-wrapper");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        tools: Math.floor(targetCounts.tools * progress),
        machines: Math.floor(targetCounts.machines * progress),
        offices: Math.floor(targetCounts.offices * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);
  };

  return (
    <section className="stats-section">
      <div className="talk-content">
        <h2 className="talk-title">
          LATS TALK WITH US
        </h2>
        <p className="talk-text">
          Mollit anim laborum. Dvcu is aute iruxvfg dhjkol ohr in re voluptate velit esscillumlore eu quife nrulla pariatur.
          Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollit animth incididunt ut; o5tu layjobo re
          mollit anim.
        </p>
        <button className="talk-btn">READ MORE</button>
      </div>
      <div className="stats-grid-wrapper">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">
              {counts.tools.toString().padStart(2, "0")}
            </div>
            <div className="stat-subheading">MACHINERY</div>
            <div className="stat-label">Tools</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {counts.machines.toString().padStart(2, "0")}
            </div>
            <div className="stat-subheading">MACHINERY</div>
            <div className="stat-label">Tools</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {counts.offices.toString().padStart(2, "0")}
            </div>
            <div className="stat-subheading">MACHINERY</div>
            <div className="stat-label">Tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
