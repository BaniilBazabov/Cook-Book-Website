import "./about.css";
import alexImg from "./teamImages/alex.jpg";
import daniilImg from "./teamImages/daniil.jpg";
import preciousImg from "./teamImages/precious.jpg";
import adamImg from "./teamImages/adam.png";
import eoinImg from "./teamImages/eion.png";
import benImg from "./teamImages/ben.jpg"

export default function About() {
   return (
      <div className="about">
         <div className="about-container">
            <div className="about-content">
               <h1 className="about-title">ABOUT US</h1>
               <div className="backstory-container">
                  <h3 className="subtitle">
                     <span className="left">Our Motto: </span>
                     <span className="right">For Students by Students</span>
                  </h3>
                  <h4 className="subtitle">
                     <span className="left">Website created by: </span>
                     <span className="right">
                        {" "}
                        Alex, Daniil, Ben, Adam, Eoin and Precious
                     </span>
                  </h4>
                  <hr className="divider" />
                  <div className="backstory-description">
                     <h5 className="backstory-title">Our Backstory</h5>
                     <p className="b-description">
                        <span className="start_char">O</span>
                        ur inspiration for this idea , arose from one of team
                        members, Adam's, deep and contagious passion for cooking
                        and baking. While we were in the discussion of a cooking
                        website , we realised that there was a common problem
                        amongst our age demographic related to food. Finding
                        recipes suited to one's taste as well as one's budget is
                        extremely difficult as well as time consuming. Being the
                        problem solvers we were, we figured since our idea was
                        based on making a cookbook website , we should design a
                        way to aid Maynooth University Students like us to save
                        money but also savour some sweet meals on even sweeter
                        deals. Our plan was to display the preparation and
                        cooking time required for each recipe as well as the
                        cost and a tutorial for guidance. Unfortunately, due to
                        time pressure we were not able to fully bring to life
                        all of our solutions. Although, registered users are
                        still able to add, update and delete recipes they have
                        personally created.
                     </p>
                  </div>
                  <hr className="divider" />
               </div>
            </div>
         </div>

         <div className="team-section">
            <h5 className="team-title">Our Team</h5>
            <div className="team-container">
               <div className="about-team">
                  <img className="about-team-img" src={alexImg} alt="" />

                  <div className="team-info">
                     <h3 className="team-name">Alex</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team" >
                  <img
                     className="about-team-img"
                     src={daniilImg} 
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Daniil</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src={adamImg}
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Adam</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src={eoinImg}
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Eoin </h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src={preciousImg}
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Precious</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src={benImg}
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Ben</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
