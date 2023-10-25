import React, {
  useState,
  // useEffect
} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import { auth } from "../src/firebase";

function LandingPage() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [selected, setSelected] = useState(0);

  const items = [
    {
      name: "Transcription",
      content:
        "Automatic transcription of every therapy session, ensuring no detail is missed.",
    },
    {
      name: "Summaries",
      content:
        "AI-generated session summaries to quickly capture key points and observations.",
    },
    {
      name: "Efficiency",
      content:
        "Dramatically reduce the workload of therapists by streamlining documentation.",
    },
  ];

  const items2 = [
    {
      name: "Time-saving",
      content:
        "No more manual note-taking. Let the tool handle the documentation so therapists can focus on their clients.",
    },
    {
      name: "Precision",
      content:
        "Ensure every detail is captured with high accuracy using state-of-the-art AI transcription.",
    },
    {
      name: "Continual Learning",
      content:
        "The tool adapts and refines insights over time for consistently improved results.",
    },
  ];

  const items3 = [
    {
      name: "Data Security",
      content:
        "Upholding the highest standards of data protection and confidentiality.",
    },
    {
      name: "Integration",
      content:
        "Seamlessly integrate with existing telehealth platforms and tools.",
    },
    {
      name: "Intuitive Display",
      content:
        "Easy-to-read transcripts and summaries displayed in a user-friendly manner.",
    },
  ];

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user && !user.isAnonymous) {
  //       setLoggedIn(true);
  //       sessionStorage.setItem("uid", user.uid);
  //       console.log("User is logged in:", user.uid);
  //     } else {
  //       setLoggedIn(false);
  //       sessionStorage.removeItem("uid");
  //       console.log("User is logged out or anonymous");
  //     }
  //   });
  // const timer = setTimeout(() => {a
  //   setShowPriorityModal(true);
  // }, 100000);
  // return () => clearTimeout(timer);
  // }, []);

  // const handlePrioritySelect = async (priority) => {
  //   console.log("Selected priority:", priority);
  // };

  return (
    <div>
      <div>
        <div className="login-btn-container"></div>
      </div>
      <div className="container1">
        <h1 className="title">The Therapy Assistant</h1>
        <h2 className="subtitle">
          AI-powered transcriptions and session summaries for therapists.
        </h2>
        <div className="btn-container"></div>
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
            <Link className="section-btn" to="/signUp">
              Join
            </Link>
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
            <Link className="section-btn" to="/signUp">
              Join
            </Link>
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
            <Link className="section-btn" to="/signUp">
              Join
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
