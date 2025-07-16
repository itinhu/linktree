"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Globe, Gamepad2, ExternalLink } from "lucide-react"
import "./App.css"
import Foto from "../src/assets/italo.jpeg";

function App() {
  const [animateLinks, setAnimateLinks] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateLinks(true)
  }, [])

  return (
    <div className="pixel-container">
      <div className="game-window">
        <div className="game-header">
          <div className="pixel-health-bar">
            <div className="pixel-health"></div>
          </div>
          <div className="pixel-score">SCORE: 1985</div>
        </div>

        <div className="game-content">
          <div className="pixel-avatar">
            <img src={Foto} alt="Pixel Avatar" className="pixel-image" />
          </div>

          <h1 className="pixel-title">ÍTALO IRAN</h1>
          <p className="pixel-subtitle">DESENVOLVEDOR | GAMER </p>

          <div className={`link-container ${animateLinks ? "animate" : ""}`}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-link"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="link-icon">{link.icon}</span>
                <span className="link-text">{link.title}</span>
                <ExternalLink className="link-arrow" size={16} />
              </a>
            ))}
          </div>
        </div>

        <footer className="game-footer">
          <p className="pixel-footer-text">PRESS START TO CONNECT</p>
          <div className="pixel-controls">
            <div className="pixel-button">A</div>
            <div className="pixel-button">B</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

const links = [
  
  {
    title: "GitHub",
    url: "https://twitch.tv/itinhuz",
    icon: <Twitch size={20} />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/italoiran/",
    icon: <Linkedin size={20} />,
  },
  {
    title: "Email",
    url: "mailto:italow6@gmail.com",
    icon: <Mail size={20} />,
  },
  
]

export default App
