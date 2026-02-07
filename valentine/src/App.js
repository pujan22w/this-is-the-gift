import { useState } from "react";
import "./App.css";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [currentVideo, setCurrentVideo] = useState("");
  const [message, setMessage] = useState("");

  const handleNoClick = () => {
    if (noClicks === 0) {
      setCurrentVideo("/video1.mp4");
      setMessage("Pleaseee don't say no 🥺");
      setNoClicks(1);
    } else if (noClicks === 1) {
      setCurrentVideo("/video2.mp4");
      setMessage("I will treat you like a queen 👑💖");
      setNoClicks(2);
    } else {
      setNoClicks(3); // remove No button
    }
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1>Will You Be My Valentine? 💖</h1>

          {currentVideo && (
            <div className="video-box">
              <video src={currentVideo} controls autoPlay />
            </div>
          )}

          {message && <p className="beg-text">{message}</p>}

          <div className="button-group">
            <button
              className="yes"
              style={{
                transform: `scale(${1 + noClicks * 0.3})`
              }}
              onClick={() => setAccepted(true)}
            >
              Yes ❤️
            </button>

            {noClicks < 3 && (
              <button className="no" onClick={handleNoClick}>
                No 😜
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="celebrate">
          <h1>Yayyyy 💕</h1>
          <h2>You Are My Forever Valentine ❤️</h2>

          <img
            src="/love.jpeg"
            alt="Love"
            className="love-img"
          />

          <div className="love-text">
            💖 I Love You So Much 💖
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
