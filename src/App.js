import React from 'react';
import './App.css';

function App() {
  return (
    <html lang="en">
      <head>
          <title>Making Waves</title>
      </head>
      <body>
        <div className="ocean">
          <svg className="waterContainer">
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#17C3ED" />
              <stop offset="100%" stop-color="#0B4A72" />
            </linearGradient>
            <path
              className="water"
              fill="url(#waterGradient)"
              d="
                M 0,180
                C 750,220
                  750,50
                  1900,50

                V 800
                H 0
                V 50
                Z"
            >
              <animate
                repeatCount="indefinite"
                fill="#0B4A72"
                attributeName="d"
                dur="12s"
                values="
                  M 0,130
                  C 750,220
                    750,130
                    1900,50

                  V 800
                  H 0
                  V 50
                  Z;

                  M 0,220
                  C 750,130
                    750,50
                    1900,130

                  V 800
                  H 0
                  V 50
                  Z;

                  M 0,130
                  C 750,50
                    750,130
                    1900,220

                  V 800
                  H 0
                  V 50
                  Z;

                  M 0,50
                  C 750,130
                    750,220
                    1900,130

                  V 800
                  H 0
                  V 50
                  Z;
                  
                  M 0,130
                  C 750,220
                    750,130
                    1900,50

                  V 800
                  H 0
                  V 50
                  Z;
                "
              ></animate>
            </path>
          </svg>
        </div>
      </body>
    </html>
  );
}

export default App;
