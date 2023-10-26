import React, {
  useState,
  // useEffect
} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { auth } from "../src/firebase";

function LandingPage() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [selected, setSelected] = useState(0);

  const items = [
    {
      name: "Indoor Activities",
      content:
        "A curated list of indoor activities to keep your kids entertained.",
    },
    {
      name: "Outdoor Fun",
      content:
        "Safely explore the outdoors with a variety of kid-friendly activities.",
    },
    {
      name: "Educational",
      content: "Activities that are fun and also stimulate your child's mind.",
    },
  ];

  const items2 = [
    {
      name: "Time-saving",
      content:
        "Quickly find activities that suit your schedule and your child's age.",
    },
    {
      name: "Safe",
      content: "All activities are vetted for safety and age appropriateness.",
    },
    {
      name: "Variety",
      content: "Never run out of ideas with constantly updated activities.",
    },
  ];

  const items3 = [
    {
      name: "User Reviews",
      content: "Read reviews from other parents to make informed decisions.",
    },
    {
      name: "Save Favorites",
      content:
        "Keep track of activities your kids love for easy future access.",
    },
    {
      name: "Easy Sharing",
      content: "Share activities with other parents at the tap of a button.",
    },
  ];

  return (
    <div>
      <div className="container1">
        <h1 className="title">Kiddl - Activities for Kids</h1>
        <h2 className="subtitle">
          Your go-to app for fun and educational activities for children.
        </h2>
        <div className="btn-container">
          <button
            style={{
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "black 2px solid",
              color: "black",
              fontWeight: "400px",
              width: "200px",
            }}
            onClick={() => (window.location.href = "https://play.google.com/")}
          >
            Get it on Google Play
          </button>
          <Link
            style={{
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#000",
              border: "black 2px solid",
              fontWeight: "400px",
              width: "200px",
            }}
            className="btn btn-secondary"
            to="/dashboard"
          >
            Create Activities
          </Link>
        </div>
      </div>
      <div className="container1b"></div>
      <div className="container2">
        <div className="problem-section">
          <div className="h3AndP">
            <h2 className="section-header">Real-time Transcription</h2>
            <h3>Documenting Every Moment</h3>
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      selected === index ? "#fff" : "rgba(255,255,255,.2)",
                  }}
                  onClick={() => setSelected(index)}
                >
                  <strong
                    style={{
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.name}
                  </strong>
                  <div
                    className="bubble-body"
                    style={{ display: selected === index ? "block" : "none" }}
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="problem-section2">
          <div className="h3AndP">
            <h2 className="section-header">AI-Enhanced Summaries</h2>
            <h3>Swiftly Capture the Essence of Each Session</h3>

            <ul>
              {items2.map((item, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      selected === index ? "#fff" : "rgba(255,255,255,.2)",
                  }}
                  onClick={() => setSelected(index)}
                >
                  <strong
                    style={{
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.name}
                  </strong>
                  <div
                    className="bubble-body"
                    style={{ display: selected === index ? "block" : "none" }}
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="problem-section3">
          <div className="h3AndP">
            <h2 className="section-header">Unparalleled Data Security</h2>
            <h3>Guaranteed Protection for Every Session</h3>
            <ul>
              {items3.map((item, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      selected === index ? "#fff" : "rgba(255,255,255,.2)",
                  }}
                  onClick={() => setSelected(index)}
                >
                  <strong
                    style={{
                      fontSize: "1.4rem",
                    }}
                  >
                    {item.name}
                  </strong>
                  <div
                    className="bubble-body"
                    style={{ display: selected === index ? "block" : "none" }}
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
