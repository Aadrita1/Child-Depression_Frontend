import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Spinner from "./components/Spinner.js";
import BmiCalculatorPage from './components/BmiCalculator';
import SymptomsPage from './components/SymptomsPage';
import TherapyPage from './components/TherapyPage';
import AboutUsPage from './components/AboutUsPage';
import Navbar from './components/Navbar';


const MySwal = withReactContent(Swal);

function App() {
  const [schoolyear, setSchoolYear] = useState();
  const [age, setAge] = useState();
  const [bmi, setBmi] = useState();
  const [phqscore, setPhqScore] = useState();
  let [depressiveness, setDepressiveness] = useState();
  let [suicidal, setSuicidal] = useState();
  let [depressiontreatment, setDepressionTreatment] = useState();
  const [gadscore, setGadScore] = useState();
  let [anxiousness, setAnxiousness] = useState();
  let [anxietydiagnosis, setAnxietyDiagnosis] = useState();
  let [anxietytreatment, setAnxietyTreatment] = useState();
  const [epworthscore, setEpworthScore] = useState();
  let [sleepiness, setSleepiness] = useState();
  let [gender, setGender] = useState();
  let [whobmi, setWhobmi] = useState();
  let [anxietyseverity, setAnxietySeverity] = useState();
  let [depressionseverity, setDepressionSeverity] = useState();

  const [loading, setLoading] = useState();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!(schoolyear && age && bmi && phqscore && gadscore && epworthscore)) {
      message.error('please fill all the input fields');
    } else {
      depressiveness = depressiveness ? depressiveness : 1;
      suicidal = suicidal ? suicidal : 1;
      depressiontreatment = depressiontreatment ? depressiontreatment : 1;
      anxiousness = anxiousness ? anxiousness : 1;
      anxietydiagnosis = anxietydiagnosis ? anxietydiagnosis : 1;
      anxietytreatment = anxietytreatment ? anxietytreatment : 1;
      sleepiness = sleepiness ? sleepiness : 1;
      gender = gender ? gender : 1;
      whobmi = whobmi ? whobmi : 0;
      anxietyseverity = anxietyseverity ? anxietyseverity : 3;
      depressionseverity = depressionseverity ? depressionseverity : 4;
      let gender_male = 0
      let gender_female = 0
      let class1 = 0
      let class2 = 0
      let class3 = 0
      let normal = 0
      let overweight = 0
      let Underweight = 0
      let anxiety_mild = 0
      let depression_mild = 0
      let anxiety_moderate = 0
      let depression_moderate = 0
      let depression_moderatelysevere = 0
      let anxiety_noneminimal = 0
      let depression_noneminimal = 0
      let anxiety_severe = 0
      let depression_severe = 0
      let anxiety_none = 0
      let depression_none = 0

      if(Number(gender) === 0){
        gender_female = 1
        gender_male = 0
      }
      else{
        gender_female = 0
        gender_male = 1
      }
      if(Number(whobmi) === 0){
        class1 = 1
        class2 = 0
        class3 = 0
        normal = 0
        overweight = 0
        Underweight = 0
      }
      else if(Number(whobmi) === 1){
        class1 = 0
        class2 = 1
        class3 = 0
        normal = 0
        overweight = 0
        Underweight = 0
      }
      else if(Number(whobmi) === 2){
        class1 = 0
        class2 = 0
        class3 = 1
        normal = 0
        overweight = 0
        Underweight = 0
      }
      else if(Number(whobmi) === 3){
        class1 = 0
        class2 = 0
        class3 = 0
        normal = 1
        overweight = 0
        Underweight = 0
      }
      else if(Number(whobmi) === 4){
        class1 = 0
        class2 = 0
        class3 = 0
        normal = 0
        overweight = 1
        Underweight = 0
      }
      else{
        class1 = 0
        class2 = 0
        class3 = 0
        normal = 0
        overweight = 0
        Underweight = 1
      }
      if(Number(anxietyseverity) === 0){
        anxiety_mild = 1
        anxiety_moderate = 0
        anxiety_noneminimal = 0
        anxiety_severe = 0
        anxiety_none = 0
      }
      else if(Number(anxietyseverity) === 1){
        anxiety_mild = 0
        anxiety_moderate = 1
        anxiety_noneminimal = 0
        anxiety_severe = 0
        anxiety_none = 0
      }
      else if(Number(anxietyseverity) === 2){
        anxiety_mild = 0
        anxiety_moderate = 0
        anxiety_noneminimal = 1
        anxiety_severe = 0
        anxiety_none = 0
      }
      else if(Number(anxietyseverity) === 3){
        anxiety_mild = 0
        anxiety_moderate = 0
        anxiety_noneminimal = 0
        anxiety_severe = 1
        anxiety_none = 0
      }
      else{
        anxiety_mild = 0
        anxiety_moderate = 0
        anxiety_noneminimal = 0
        anxiety_severe = 0
        anxiety_none = 1
      }
      if(Number(depressionseverity) === 0){
        depression_mild = 1
        depression_moderate = 0
        depression_moderatelysevere = 0
        depression_noneminimal = 0
        depression_severe = 0
        depression_none = 0
      }
      else if(Number(depressionseverity) === 1){
        depression_mild = 0
        depression_moderate = 1
        depression_moderatelysevere = 0
        depression_noneminimal = 0
        depression_severe = 0
        depression_none = 0
      }
      else if(Number(depressionseverity) === 2){
        depression_mild = 0
        depression_moderate = 0
        depression_moderatelysevere = 1
        depression_noneminimal = 0
        depression_severe = 0
        depression_none = 0
      }
      else if(Number(depressionseverity) === 3){
        depression_mild = 0
        depression_moderate = 0
        depression_moderatelysevere = 0
        depression_noneminimal = 1
        depression_severe = 0
        depression_none = 0
      }
      else if(Number(depressionseverity) === 5){
        depression_mild = 0
        depression_moderate = 0
        depression_moderatelysevere = 0
        depression_noneminimal = 0
        depression_severe = 1
        depression_none = 0
      }
      else{
        depression_mild = 0
        depression_moderate = 0
        depression_moderatelysevere = 0
        depression_noneminimal = 0
        depression_severe = 0
        depression_none = 1
      }

      const schoolyearNo = Number(schoolyear);
      const ageNo = Number(age);
      const bmiNo = Number(bmi);
      const phqscoreNo = Number(phqscore);
      const depressivenessNo = Number(depressiveness);
      const suicidalNo = Number(suicidal);
      const depressiontreatmentNo = Number(depressiontreatment);
      const gadscoreNo = Number(gadscore);
      const anxiousnessNo = Number(anxiousness);
      const anxietydiagnosisNo = Number(anxietydiagnosis);
      const anxietytreatmentNo = Number(anxietytreatment);
      const epworthscoreNo = Number(epworthscore);
      const sleepinessNo = Number(sleepiness);
      const genderFemaleNo = Number(gender_female)
      const genderMaleNo = Number(gender_male);
      const class1No = Number(class1)
      const class2No = Number(class2)
      const class3No = Number(class3)
      const normalNo = Number(normal)
      const overweightNo = Number(overweight)
      const underweightNo = Number(Underweight)
      const anxietymildNo = Number(anxiety_mild)
      const anxietymoderateNo = Number(anxiety_moderate)
      const anxietynoneminimalNo = Number(anxiety_noneminimal)
      const anxietysevereNo = Number(anxiety_severe)
      const anxietynoneNo = Number(anxiety_none)
      const depressionmildNo = Number(depression_mild)
      const depressionmoderateNo = Number(depression_moderate)
      const depressionmoderatelysevereNo = Number(depression_moderatelysevere)
      const depressionnoneminimalNo = Number(depression_noneminimal)
      const depressionsevereNo = Number(depression_severe)
      const depressionnoneNo = Number(depression_none)
      // console.log(schoolyearNo, ageNo, bmiNo, phqscoreNo, depressivenessNo, suicidalNo, depressiontreatmentNo, gadscoreNo, anxiousnessNo, anxietydiagnosisNo, anxietytreatmentNo, epworthscoreNo, sleepinessNo,genderFemaleNo,genderMaleNo,class1No,class2No,class3No,normalNo,overweightNo,underweightNo,anxietymildNo,anxietymoderateNo,anxietynoneminimalNo,anxietysevereNo,anxietynoneNo,depressionmildNo,depressionmoderateNo,depressionmoderatelysevereNo,depressionnoneminimalNo,depressionsevereNo,depressionnoneNo)
      try {
        setLoading(true);
        const {data} = await axios.post(`https://child-depression-backend.onrender.com/predict`, {
          school_year:  schoolyearNo,
          age: ageNo,
          bmi: bmiNo,
          phq_score: phqscoreNo,
          depressiveness: depressivenessNo,
          suicidal: suicidalNo,
          depression_treatment: depressiontreatmentNo,
          gad_score: gadscoreNo,
          anxiousness: anxiousnessNo,
          anxiety_diagnosis: anxietydiagnosisNo,
          anxiety_treatment: anxietytreatmentNo,
          epworth_score: epworthscoreNo,
          sleepiness: sleepinessNo,
          gender_female: genderFemaleNo,
          gender_male: genderMaleNo,
          who_bmi_Class_I_Obesity: class1No,
          who_bmi_Class_II_Obesity: class2No,
          who_bmi_Class_III_Obesity: class3No,
          who_bmi_Normal: normalNo,
          who_bmi_Overweight: overweightNo,
          who_bmi_Underweight: underweightNo,
          anxiety_severity_Mild: anxietymildNo,
          anxiety_severity_Moderate: anxietymoderateNo,
          anxiety_severity_None_minimal: anxietynoneminimalNo,
          anxiety_severity_Severe: anxietysevereNo,
          anxiety_severity_none: anxietynoneNo,
          depression_severity_Mild: depressionmildNo,
          depression_severity_Moderate: depressionmoderateNo,
          depression_severity_Moderately_severe: depressionmoderatelysevereNo,
          depression_severity_None_minimal: depressionnoneminimalNo,
          depression_severity_Severe: depressionsevereNo,
          depression_severity_none: depressionnoneNo
        });
        setLoading(false);
        if (data.prediction === true) {
          MySwal.fire({
              title: `Depression Status - Positive.`,
              html: `
                  <div style="font-size: 18px;">
                      It seems like you might be going through a tough time. Remember that you're not alone in this, and reaching out for help is a sign of strength. Consider talking to a mental health professional, a counselor, or a trusted person in your life about what you're experiencing. Taking care of your mental well-being is crucial, and there are resources available to guide you through this journey.
                  </div>
              `,
              icon: 'success'
          });
      } else if (data.prediction === false) {
          MySwal.fire({
              title: `Depression Status - Negative`,
              html: `
                  <div style="font-size: 18px;">
                  It's great to hear that the initial assessment indicates you might not be experiencing symptoms of depression. However, mental health can be complex, and it's important to continue taking care of yourself. If you ever notice changes in your thoughts, emotions, or behaviors, or if you simply want to talk about your feelings, don't hesitate to reach out to friends, family, or a mental health professional. Remember that self-care and maintaining open communication are valuable aspects of well-being.
                  </div>
              `,
              icon: 'success'
          });
      }

      } catch (error) {
        setLoading(false);

        console.log(error.response);

        message.error('Something went Wrong. Please try Again');
      }
    }
  };

  const FormComponent = () => {
    return (
      <>
          {loading && <Spinner />}
        <Navbar/>
        <div className="body">
          <p className="title">Depression Self-Assessment Form</p>
          {/* <div className='my-element'> */}
          <form onSubmit={onSubmitForm}>
            <label className='label'>Which year of school are you in?</label>
            <input
              type="number"
              placeholder="Enter number between 1 to 10"
              min="0"
              max = "10"
              value={schoolyear}
              className="year_class"
              onChange={(e) => setSchoolYear(e.target.value)}
            />
            <label className='label'>How old are you?</label>
            <input
              type="number"
              placeholder="Enter your age between 6 to 18"
              min="6"
              max="18"
              value={age}
              className="age_class"
              onChange={(e) => setAge(e.target.value)}
            />
            <label className='label'>What is your BMI (Body Mass Index)?</label>
            <input
              type="text"
              placeholder="Enter a valid Body Mass Index"
              min="0"
              max = "60"
              value={bmi}
              className="bmi_class"
              onChange={(e) => setBmi(e.target.value)}
            />
            <label className='label'>What is your PHQ score?</label>
            <input
              type="number"
              placeholder="Enter a PHQ score between 0 to 27"
              min="0"
              max = "27"
              value={phqscore}
              className="phqscore_class"
              onChange={(e) => setPhqScore(e.target.value)}
            />
            <label className='label'>Have you been experiencing feelings of depressiveness?</label>
            <select
              className="depressiveness_class"
              value={depressiveness}
              onChange={(e) => setDepressiveness(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label className='label'>Have you had thoughts of suicide?</label>
            <select
              className="suicidal_class"
              value={suicidal}
              onChange={(e) => setSuicidal(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label className='label'>Have you ever undergone treatment for depression?</label>
            <select
              className="depression_treatment"
              value={depressiontreatment}
              onChange={(e) => setDepressionTreatment(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label className='label'>What is your GAD score?</label>
            <input
              type="number"
              placeholder="Enter a GAD score between 0 to 21"
              min="0"
              max = "21"
              value={gadscore}
              className="gad_score"
              onChange={(e) => setGadScore(e.target.value)}
            />
            <label className='label'>Do you often feel excessively worried, nervous, or restless?</label>
            <select
              className="anxiousness_class"
              value={anxiousness}
              onChange={(e) => setAnxiousness(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label className='label'>Have you ever been diaognosed with anxiety?</label>
            <select
              className="anxiety_diagnosis"
              value={anxietydiagnosis}
              onChange={(e) => setAnxietyDiagnosis(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label className='label'>Have you ever undergone treatment for anxiety?</label>
            <select
              className="anxiety_treatment"
              value={anxietytreatment}
              onChange={(e) => setAnxietyTreatment(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label className='label'>What is your epworth score?</label>
            <input
              type="number"
              placeholder="Enter an epworth-score between 0 to 32"
              min="0"
              max="32"
              className="epworth_score"
              onChange={(e) => setEpworthScore(e.target.value)}
              value={epworthscore}
            />
            <label className='label'>Do you experience any sudden episodes of sleepiness that interfere with your daily activities?</label>
            <select
              className="sleepiness_class"
              value={sleepiness}
              onChange={(e) => setSleepiness(e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label className='label'>What is your Gender?</label>
            <select
              className="gender_class"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
            <label className='label'>How would you describe your BMI category?</label>
            <select
              className="who_bmi"
              value={whobmi}
              onChange={(e) => setWhobmi(e.target.value)}
            >
              <option value="0">Class I Obese</option>
              <option value="1">Class II Obese</option>
              <option value="2">Class III Obese</option>
              <option value="3">Normal weight</option>
              <option value="4">Overweight</option>
              <option value="5">Underweight</option>
            </select>
            <label className='label'>How much severe is your anxiety?</label>
            <select
              className="anxiety_severity"
              value={anxietyseverity}
              onChange={(e) => setAnxietySeverity(e.target.value)}
            >
              <option value="0">Mild</option>
              <option value="1">Moderate</option>
              <option value="2">None Minimal</option>
              <option value="3">Severe</option>
              <option value="4">None</option>
            </select>
            <label className='label'>How much severe is your depression?</label>
            <select
              className="depression_severity"
              value={depressionseverity}
              onChange={(e) => setDepressionSeverity(e.target.value)}
            >
              <option value="0">Mild</option>
              <option value="1">Moderate</option>
              <option value="2">Moderately Severe</option>
              <option value="3">None Minimal</option>
              <option value="4">Severe</option>
              <option value="5">None</option>
            </select>
            <button className="my-button">PREDICT DEPRESSION</button>
          </form>
          {/* </div> */}
        </div>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={FormComponent()} />
        <Route path="/symptoms" element={<SymptomsPage />} />
        <Route path="/bmi-calculator" element={<BmiCalculatorPage />}/>
        <Route path="/therapy-page" element={<TherapyPage />}/>
        <Route path="/aboutus-page" element={<AboutUsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
