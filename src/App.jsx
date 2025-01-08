import React, { useState, useEffect, useRef } from 'react';
    import './index.css';
    import './App.css';

    const App = () => {
      const [hoursSaved, setHoursSaved] = useState(0);
      const [hourlyRate, setHourlyRate] = useState(0);
      const taglineRef = useRef(null);

      useEffect(() => {
        if (taglineRef.current) {
          taglineRef.current.style.opacity = 1;
          taglineRef.current.style.transform = 'translateY(0)';
        }
      }, []);

      const calculateSavings = () => {
        const monthlySavings = hoursSaved * hourlyRate * 4;
        const annualSavings = monthlySavings * 12;
        const roi = (annualSavings / 18000) * 100;
        return { monthlySavings, annualSavings, roi };
      };

      const { monthlySavings, annualSavings, roi } = calculateSavings();

      return (
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="particles"></div>
            <h1 ref={taglineRef} className="hero-tagline">
              Take Command of Your Future.
            </h1>
            <p>Own your AI command center and unlock the power of automation.</p>
            <button>Own Your Future Now</button>
          </section>

          {/* Key Features Section */}
          <section className="features-section">
            <h2>Key Features</h2>
            <div className="feature-cards">
              <div className="feature-card">
                <span className="icon">
                  <span className="placeholder-icon">⚙️</span>
                </span>
                <h3>AI-Powered Knowledge Retrieval</h3>
                <p>Find insights instantly from PDFs, spreadsheets, and even code—powered by advanced Retrieval-Augmented Generation (RAG).</p>
              </div>
              <div className="feature-card">
                <span className="icon">
                  <span className="placeholder-icon">👥</span>
                </span>
                <h3>Collaborate with Your Squad</h3>
                <p>Assign tasks, share research, and brainstorm ideas with AI agents that work alongside you.</p>
              </div>
              <div className="feature-card">
                <span className="icon">
                  <span className="placeholder-icon">🔒</span>
                </span>
                <h3>Privacy You Can Trust</h3>
                <p>Local-first, offline-ready, and fully secure for sensitive data handling.</p>
              </div>
              <div className="feature-card">
                <span className="icon">
                  <span className="placeholder-icon">⚡</span>
                </span>
                <h3>Smarter Workflows, Less Effort</h3>
                <p>Automate repetitive tasks, summarize documents, and extract key insights effortlessly.</p>
              </div>
              <div className="feature-card">
                <span className="icon">
                  <span className="placeholder-icon">💬</span>
                </span>
                <h3>Talk to Your Data</h3>
                <p>Chat with documents like a pro—ask questions and get answers fast.</p>
              </div>
              <div className="feature-card">
                <span className="icon">
                  <span className="placeholder-icon">🛠️</span>
                </span>
                <h3>Flexible &amp; Scalable</h3>
                <p>Cross-platform compatibility for Mac, Windows, and Linux, ready for teams of all sizes.</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="pricing-section">
            <h2>Pricing</h2>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Price</th>
                  <th>Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td>
                    <img src="https://placehold.co/50x50/4caf50/ffffff?text=UC" alt="Unicorn Commander Icon" />
                    Unicorn Commander
                    <div className="highlight-bar"></div>
                  </td>
                  <td>$18,000</td>
                  <td>Lifetime updates, priority support, all features included.
                    <button className="cta-button">Get Started</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://placehold.co/50x50/00bcd4/ffffff?text=UCL" alt="Unicorn Commander Lite Icon" />
                    Unicorn Commander Lite
                  </td>
                  <td>$1,499</td>
                  <td>Personal use license, automation tools, basic support.
                    <button className="cta-button">Get Started</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://placehold.co/50x50/9c27b0/ffffff?text=UCC" alt="Unicorn Commander Cloud Icon" />
                    Unicorn Commander Cloud
                  </td>
                  <td>Custom</td>
                  <td>Managed infrastructure, scalability, enterprise support.
                    <button className="cta-button">Contact Us</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* ROI Calculator */}
          <section className="roi-calculator">
            <h2>ROI Calculator</h2>
            <label>Hours Saved per Week (0-200):</label>
            <input
              type="range"
              min="0"
              max="200"
              value={hoursSaved}
              onChange={(e) => setHoursSaved(parseInt(e.target.value))}
              className="roi-slider"
            />
            <label>Hourly Rate ($0-$200):</label>
            <input
              type="range"
              min="0"
              max="200"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="roi-slider"
            />
            <div className="output">
              <p>Monthly Savings: ${monthlySavings.toFixed(2)}</p>
              <p>Annual Savings: ${annualSavings.toFixed(2)}</p>
              <p>ROI: {roi.toFixed(2)}%</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${roi}%` }}></div>
              </div>
            </div>
          </section>

          {/* Dedicated Support Section */}
          <section className="support-section">
            <h2>Dedicated Support</h2>
            <div className="support-cards">
              <div className="support-card">
                <h3>Explosive ROI Potential</h3>
                <p>Maximize your investment with our AI-powered tools.</p>
              </div>
              <div className="support-card">
                <h3>Future-Proof Technology</h3>
                <p>Stay ahead of the curve with our cutting-edge AI solutions.</p>
              </div>
              <div className="support-card">
                <h3>Dedicated Support & Community</h3>
                <p>Get the help you need with our dedicated support team and community.</p>
              </div>
            </div>
          </section>

          {/* Waitlist Signup Section */}
          <section className="waitlist-section">
            <h2>Join Our Waitlist</h2>
            <form className="waitlist-form">
              <input type="email" placeholder="Email Address" />
              <label>
                <input type="checkbox" /> I’m interested in being a beta tester.
              </label>
              <button>Join Waitlist</button>
            </form>
          </section>

          {/* Footer */}
          <footer>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <span role="img" aria-label="Facebook" className="social-icon">🌐</span>
              </a>
              <a href="#" aria-label="Twitter">
                <span role="img" aria-label="Twitter" className="social-icon">🐦</span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span role="img" aria-label="LinkedIn" className="social-icon">💼</span>
              </a>
            </div>
          </footer>
        </div>
      );
    };

    export default App;
