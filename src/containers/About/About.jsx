import ContentContainer from '../ContentContainer/ContentContainer';
import Header from "../../components/Header/Header";
import Headshot from '../../assets/images/headshot.jpg';
import './about.css';
import Resume from './rraiford_resume.pdf';

function About() {
  return (
    <ContentContainer>
      <Header title="About" />
    <div className="d-flex justify-content-center headshot-container">
        <img id="headshot" src={Headshot} alt="Rashawn Headshot"/>
    </div>
     
      <p>
        Hi, I'm Rashawn Raiford. Ever since I was a teenager, I have been
        fascinated with computers and taking on challenges. Computers were my
        way of escaping from my small, rural hometown to see places I had never
        seen and to discover new things.
      </p>
      <p>
        After high school, I started college at Augusta State University. I
        graduated with a Bachelor's in Management Information Systems in 2012,
        but after taking a few programming classes during my junior and senior
        year I became fascinated with computer programming. After I graduated, I
        started engaging in books and taking online courses to learn more about
        programming
      </p>
      <p>
        After I became more confident in my programming skills, I began my
        journey to start my software development career. I have been employed as
        a software developer for five years now and have done both frontend and
        backend work on multiple projects.
      </p>
      <div className="row justify-content-center my-5">
        <a href={Resume} className="btn resume-btn" download>Download Resume</a>
      </div>
    </ContentContainer>
  );
}

export default About;
