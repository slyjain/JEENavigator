import React from 'react';
import './JEEPaper.css';

const JEEPaper = () => {
  return (
    <div className="jee-container">
      <div className="jee-content">
        <div className="jee-main">
          <div className="jee-question">
            <h2>Question 1:</h2>
            <p>
              The characteristic distance at which quantum gravitational effects are significant, 
              the Planck length, can be determined from a suitable combination of the fundamental 
              physical constants G, ħ and c. Which of the following correctly gives the Planck length?
            </p>
            <div className="jee-options">
              <label>
                <input type="radio" name="answer" value="1" />
                (1) \(G \hbar^2 c^3\)
              </label>
              <label>
                <input type="radio" name="answer" value="2" />
                (2) \(G^2 \hbar c\)
              </label>
            </div>
          </div>
          <div className="jee-buttons">
            <button>Save & Next</button>
            <button>Save & Mark for Review</button>
            <button>Clear Response</button>
            <button>Mark for Review & Next</button>
          </div>
          <div className="jee-navigation">
            <button className="jee-nav-button"> &lt;&lt; Back </button>
            <button className="jee-nav-button"> Next &gt;&gt; </button>
          </div>
          <div className="jee-question-status">
            <div className="jee-status-indicator">89 Not Visited</div>
            <div className="jee-status-indicator">1 Not Answered</div>
            <div className="jee-status-indicator">0 Answered</div>
            <div className="jee-status-indicator">0 Marked for Review</div>
            <div className="jee-status-indicator">0 Answered & Marked for Review (will be considered for evaluation)</div>
          </div>
        </div>
        <div className="jee-question-grid">
          {[...Array(60).keys()].map(num => (
            <button key={num} className="jee-grid-item">{num + 1}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JEEPaper;
