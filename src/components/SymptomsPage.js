import React from 'react';
import './SymptomsPage.css';
import Navbar from './Navbar';

const SymptomsPage = () => {
  return (
    <div>
    <Navbar/>
      <div className="page-container1">
        <p className="heading11">Symptoms of Child Depression</p>
        <div className="symptoms-container">
          <div className="symptom">
            <h2>Feeling Sad</h2>
            <p>
              One of the most common symptoms of child depression is a persistent feeling of sadness or unhappiness.
              Children with depression may appear consistently sad or irritable.
            </p>
          </div>
          <div className="symptom">
            <h2>Loss of Interest</h2>
            <p>
              Children with depression may lose interest in activities and hobbies they once enjoyed.
              They may withdraw from social interactions and isolate themselves.
            </p>
          </div>

          <div className="symptom">
            <h2>Changes in Appetite</h2>
            <p>
              Depression can affect a child's appetite, leading to changes in eating habits.
              They may experience significant weight loss or gain.
            </p>
          </div>

          <div className="symptom">
            <h2>Difficulty Sleeping</h2>
            <p>
              Sleep disturbances are common in child depression. Your child may have trouble falling asleep, staying asleep, or experiencing nightmares.
            </p>
          </div>

          <div className="symptom">
            <h2>Fatigue</h2>
            <p>
              Children with depression often feel fatigued and lack energy. They may appear lethargic and have difficulty concentrating.
            </p>
          </div>

          <div className="symptom">
            <h2>Feelings of Worthlessness</h2>
            <p>
              Depressed children may express feelings of worthlessness or guilt, even over minor issues.
              They may have a negative self-image.
            </p>
          </div>
        </div>
        <p className="heading21">
          If you notice these symptoms in your child or suspect they may be experiencing depression, it's essential to seek professional help and support.
          Child depression can be effectively treated, and early intervention is crucial.
        </p>
      </div>
    </div>
  );
};

export default SymptomsPage;
