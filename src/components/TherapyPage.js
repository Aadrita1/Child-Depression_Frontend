import React from 'react';
import './TherapyPage.css';
import Navbar from './Navbar';

const TherapyPage = () => {
  return (
    <div>
    <Navbar/>
      <div className="page-container2">
        <p className="heading1">Websites for Therapy and Counseling</p>
        <div className="websites-container">
          <div className="website">
            <h2>BetterHelp</h2>
            <p>
              BetterHelp offers online counseling with licensed therapists.
              You can access therapy sessions from the comfort of your home.
            </p>
            <a href="https://www.betterhelp.com/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <div className="website">
            <h2>Psychotherapy Networker</h2>
            <p>
              Psychotherapy Networker provides articles, videos, and resources on various types of therapy and counseling.
            </p>
            <a href="https://www.psychotherapynetworker.org/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <div className="website">
            <h2>Regain</h2>
            <p>
              Regain specializes in online therapy for individuals and couples, including depression counseling.
            </p>
            <a href="https://www.regain.us/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <div className="website">
            <h2>Psychology Today</h2>
            <p>
              Psychology Today allows you to search for therapists and counselors specializing in depression by location.
            </p>
            <a href="https://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <div className="website">
            <h2>Talkspace</h2>
            <p>
              Talkspace provides online therapy with licensed therapists who can help with depression.
            </p>
            <a href="https://www.talkspace.com/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <div className="website">
            <h2>Calmerry</h2>
            <p>
              Calmerry offers online therapy with professional therapists experienced in treating depression.
            </p>
            <a href="https://www.calmerry.com/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <div className="website">
            <h2>Theravive</h2>
            <p>
              Theravive helps you find local therapists and counselors specializing in depression.
            </p>
            <a href="https://www.theravive.com/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        </div>

        <p className="heading1">Online Apps and Games for Depression</p>

        <div className="apps-container">
          <div className="app">
            <h2>Headspace</h2>
            <p>
              Headspace is a meditation and mindfulness app that can help reduce stress and improve mental well-being.
            </p>
            <a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer">
              Play Game
            </a>
          </div>
          <div className="app">
            <h2>Happify</h2>
            <p>
              Happify is an app designed to boost your mood and reduce stress through engaging activities and games.
            </p>
            <a href="https://www.happify.com/" target="_blank" rel="noopener noreferrer">
              Play Game
            </a>
          </div>
          <div className="app">
            <h2>Personal Zen</h2>
            <p>
              Personal Zen is a science-based game to reduce anxiety and stress.
            </p>
            <a href="https://www.personalzen.com/" target="_blank" rel="noopener noreferrer">
              Play Game
            </a>
          </div>
          <div className="app">
            <h2>Pac-Man Smile</h2>
            <p>
              Pac-Man Smile is a fun and nostalgic game that can lift your spirits.
            </p>
            <a href="https://www.google.com/logos/2010/pacman10-i.html" target="_blank" rel="noopener noreferrer">
              Play Game
            </a>
          </div>
          <div className="app">
            <h2>Colorfy</h2>
            <p>
              Colorfy is a coloring book app that can help with relaxation and creativity.
            </p>
            <a href="https://www.colorfy.net/" target="_blank" rel="noopener noreferrer">
              Play Game
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyPage;
