import React from 'react';
import './AboutUsPage.css';
import Navbar from './Navbar';
const AboutUsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="page-container3">
      <h1 className="heading">About Us</h1>
      <p>
        We are a dedicated team that initiated the development of a child depression model.
        Our mission is to provide valuable insights and support to address child depression more effectively.
      </p>

      <h2 className="team-heading">Team Members</h2>
      <ul className="team-list">
        <li>
          <strong>Aadrita Nandy</strong> - Data Science
        </li>
        <li>
          <strong>Jyoti Choudhary</strong> - Machine Learning
        </li>
        <li>
          <strong>Joanne Fredrick</strong> - Data Science
        </li>
        <li>
          <strong>TS Zacharia</strong> - Cyber Security
        </li>
        <li>
          <strong>Tom K Joseph</strong> - Cyber Security
        </li>
      </ul>
    </div>
    </>
  );
};
export default AboutUsPage;
