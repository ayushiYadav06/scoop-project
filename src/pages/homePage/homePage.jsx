import React from "react";
import "./homePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUser,
  faUsers,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assests/careerImg/img1.png";
import img2 from "../../assests/careerImg/img2.png";
import comp1 from "../../assests/careerImg/comp1.png";
import comp2 from "../../assests/careerImg/comp2.png";
import comp3 from "../../assests/careerImg/comp3.png";
import imgg1 from "../../assests/careerImg/imgg1.png";
import imgg2 from "../../assests/careerImg/imgg2.png";
import frame1 from "../../assests/careerImg/frame1.png";
const HomePage = () => {
  const careerData = [
    {
      id: 1,
      imgSrc: img1, // Update with actual image paths
      number: "01",
      title: "Data",
      hoverTitle: "Explore Data Course",
      buttonText: "Explore Now",
    },
    {
      id: 2,
      imgSrc: img1,
      number: "02",
      title: "Digital Marketing",
      hoverTitle: "Explore Marketing Course",
      buttonText: "Explore Now",
    },
    {
      id: 3,
      imgSrc: img1,
      number: "03",
      title: "Web Development",
      hoverTitle: "Explore Design Course",
      buttonText: "Explore Now",
    },
    {
      id: 4,
      imgSrc: img2,
      number: "04",
      title: "Cyber Security",
      hoverTitle: "Explore Tech Course",
      buttonText: "Explore Now",
    },
  ];

  const settings = {
    dots: false,
    infinite: false, // Set to false to stop infinite scrolling
    speed: 500, // Speed of the sliding animation
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay to stop the carousel from automatically sliding
    autoplaySpeed: 0, // Even though autoplay is false, setting this to 0 ensures no autoplay
    arrows: false,
  };

  const cardData = [
    {
      id: 1,
      imgSrc: imgg2,
      title: "Food Delivery Costs Analysis using",
      subtitle: "Python",
      users: "5K",
      likes: "578",
      dislikes: "3",
      mentor: "Garry Newell",
      company: "Microsoft",
    },
    {
      id: 2,
      imgSrc: imgg1,
      title: "Another Analysis using",
      subtitle: "R",
      users: "3K",
      likes: "300",
      dislikes: "10",
      mentor: "John Doe",
      company: "Google",
    },
    {
      id: 3,
      imgSrc: imgg1,
      title: "Another Analysis using",
      subtitle: "R",
      users: "3K",
      likes: "300",
      dislikes: "10",
      mentor: "John Doe",
      company: "Google",
    },
    // Add more card objects as needed
  ];

  const testimonials = [
    {
      id: 1,
      imgSrc: frame1,
      name: "Shreya",
      course: "Google Project Management",
      location: "India",
      testimonial:
        "The knowledge I gained through the Machine Learning and Deep Learning courses helped me land an internship.",
    },
    {
      id: 2,
      imgSrc: frame1,
      name: "John Doe",
      course: "Data Science",
      location: "USA",
      testimonial:
        "The course content was amazing and helped me switch my career to Data Science.",
    },
    {
      id: 3,
      imgSrc: frame1,
      name: "Jane Smith",
      course: "AI and Robotics",
      location: "UK",
      testimonial:
        "The practical projects were very helpful in understanding real-world applications.",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="hero-container">
          <div className="section-one">
            <h1 className="main-heading">
              Welcome to <span style={{ color: "#919B9D" }}>Scope</span>
            </h1>
            <p className="hero-para">
              Top Mentorship in Tech, Marketing & Data—Designed and Delivered by
              industry maestros.
            </p>
          </div>
          <div className="section-two">
            <button className="hero-btn">
              <span style={{ paddingRight: "0.7rem" }}>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>
              Join Now
            </button>
            <button className="hero-btn extra">
              <span style={{ paddingRight: "0.7rem" }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="career-fit">
        <div className="career-main-content">
          <h1 className="career-heading">Explore Your Career Fit</h1>
          <p className="career-para">
            Grab actionable career insights with recommended mentorship programs
            designed to turn your passion into a profession.
          </p>
        </div>
        <div className="main-card">
          {/* <Slider {...settings}> */}
          {careerData.map((item) => (
            <div className="career-card" key={item.id}>
              <div className="career-main-contentdata">
                <img src={item.imgSrc} className="imgg" alt={item.title} />
                <h1 className="data-no">{item.number}</h1>
                <h1 className="data-content">{item.title}</h1>
              </div>
              <div className="career-hover-content" style={{ display: "none" }}>
                <h1>{item.hoverTitle}</h1>
                <button>{item.buttonText}</button>
              </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>

      <div className="impact">
        <div className="impact-data">
          <div className="imapct-one">
            <img className="impact-img1" src={comp1} alt="" />
            <div className="inner-content">
              <h1 className="num">1200</h1>
              <h3 className="head">Interns</h3>
              <p className="para">
                Our internships are designed to provide hands-on experience in a
                variety of cutting-edge domains, ensuring that our interns are
                well-prepared to enter the professional world.
              </p>
            </div>
          </div>
          <div className="imapct-one">
            <img className="impact-img1" src={comp1} alt="" />
            <div className="inner-content">
              <h1 className="num">1200</h1>
              <h3 className="head">Interns</h3>
              <p className="para">
                Our internships are designed to provide hands-on experience in a
                variety of cutting-edge domains, ensuring that our interns are
                well-prepared to enter the professional world.
              </p>
            </div>
          </div>
          <div className="imapct-one">
            <img className="impact-img1" src={comp1} alt="" />
            <div className="inner-content">
              <h1 className="num">1200</h1>
              <h3 className="head">Interns</h3>
              <p className="para">
                Our internships are designed to provide hands-on experience in a
                variety of cutting-edge domains, ensuring that our interns are
                well-prepared to enter the professional world.
              </p>
            </div>
          </div>
          <div className="impact-data-content">
            <h1 className="impact-heading">Our Impact Number</h1>
            <p className="impact-para">
              Join Our rapidly growing learning community and acquire real-world
              skills.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="courses">
        <div className="classes">
          <div className="head-class">
            <h1 className="live"> Live MasterClasses</h1>
            <p className="live-para">
              Expert-led , interactive live sessions designed to deepen your
              knowledge and skills in your chosen domain of interest{" "}
            </p>
          </div>
          <div className="classes-card">
            {cardData.map((card) => (
              <div key={card.id} className="container-card">
                <div className="upper-content">
                  <img
                    className="img-class"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                  <div className="classess-content">
                    <button className="class-btn">
                      <div className="dot"></div> <div>Live</div>
                    </button>
                    <h2
                      style={{
                        fontSize: "1.3rem",
                        textAlign: "center",
                        marginTop: "2rem",
                      }}
                    >
                      {card.title}
                    </h2>
                    <h1 style={{ textAlign: "center" }}>{card.subtitle}</h1>
                  </div>
                </div>
                <div className="lower-content">
                  <h1
                    style={{
                      textAlign: "center",
                      margin: "0px",
                      marginTop: "1rem",
                    }}
                  >
                    {card.title}
                  </h1>
                  <div className="numberss">
                    <div style={{ color: "black" }}>
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <h3>{card.users}</h3>
                    <div style={{ color: "black" }}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <h3>{card.likes}</h3>
                    <div style={{ color: "black" }}>
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </div>
                    <h3>{card.dislikes}</h3>
                  </div>
                  <p style={{ fontSize: "1.2rem", marginTop: "0px" }}>
                    Mentored By
                  </p>
                  <h1
                    style={{
                      fontWeight: "700",
                      fontSize: "2.4rem",
                      margin: "0px",
                    }}
                  >
                    {card.mentor}
                  </h1>
                  <div>
                    <h1>{card.company}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="testimonal">
        <div className="testimonal-content">
          <h1 className="testimonal-heading">Listen From Our Students</h1>
          <h3 className="testimonal-para">
            150k+ Student Have Already Joined Our Courses
          </h3>
        </div>
        <div className="testiomal-cards-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testiomal-card">
             
                <div className="testimonial-img">
                  <img src={testimonial.imgSrc} alt={testimonial.name} />
                </div>
                <div className="test-content"></div>
                <h2 className="name">{testimonial.name}</h2>
                <h3 className="data">{testimonial.course}</h3>
                <h3 className="data">{testimonial.location}</h3>
                <div className="line"></div>
                <p className="test-para">"{testimonial.testimonial}"</p>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
