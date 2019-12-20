import React from 'react';
import './App.css';

function App() {
  return (
    <html lang="en">
      <head>
          <title>Making Waves</title>
      </head>
      <body>
        <div className="wavebox">
          <svg className="water">
            <path
              fill="#454599"
              d="
                M 0,100
                C 273,183
                  822,-40
                  1920,106

                V 800
                H 0
                V 67
                Z">
              <animate
                repeatCount="indefinite"
                fill="#454599"
                attributeName="d"
                dur="6s"
                values="
                  M 0 67
                  C 473,283
                    822,-40
                    1920,116

                  V 800
                  H 0
                  V 67
                  Z;

                  M 0 57
                  C 473,-40
                    1222,283
                    1920,136

                  V 800
                  H 0
                  V 67
                  Z;

                  M 0 77
                  C 973,260
                    1722,-53
                    1920,120

                  V 800
                  H 0
                  V 67
                  Z;

                  M 0 67
                  C 473,283
                    822,-40
                    1920,116

                  V 800
                  H 0
                  V 67
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
