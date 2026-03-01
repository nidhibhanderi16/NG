import { useState, useEffect } from "react";
import "./loveCard.css";

export default function LoveCard() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

const message =
  "You didn’t just bring a spark into my life; you became the quiet energy that makes my every heartbeat feel meaningful ⚡ I LOVE YOU ❤️"; 
 
  useEffect(() => {
    if (!open) return;

    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <div className="page hearts">
      <div className="content-wrapper">

        <h1 className="title heartbeat">
          ❤️ A Special Message
        </h1>

        <div
          className={`love-card ${open ? "open" : ""}`}
          onClick={() => setOpen(true)}
        >
          <div className="card-inner">

            {/* FRONT */}
            <div className="card-front">
              <h2>💌 Click to Open</h2>
              <p>Tap to reveal message</p>
            </div>

            {/* BACK */}
            <div className="card-back">
              <h2>❤️ My Message for you</h2>

              <p className="message">
                {text}
              </p>

              <div className="charge">
                <div className="level"></div>
              </div>

              <h3>— From Nidhi to Garvit ❤️🌸</h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}