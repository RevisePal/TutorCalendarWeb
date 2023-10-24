import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const AddActivity = () => {
  const [newActivity, setNewActivity] = useState({
    title: "",
    ageRange: "",
    educationType: "",
    engagementTime: 0,
    popular: false,
    recommended: false,
    thingsNeeded: [],
    timeToSetup: 0,
    type: "",
    howToPlay: "",
    howToSetup: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({
      ...newActivity,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewActivity({
      ...newActivity,
      [name]: checked,
    });
  };

  const handleArrayChange = (e) => {
    setNewActivity({
      ...newActivity,
      thingsNeeded: e.target.value.split(",").map((item) => item.trim()),
    });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({
      ...newActivity,
      [name]: parseInt(value, 10),
    });
  };

  const addActivityToDB = async () => {
    try {
      const docRef = await addDoc(collection(db, "activities"), newActivity);
      console.log("Document written with ID: ", docRef.id);
      localStorage.setItem("activityAdded", "Activity added successfully!");
      navigate("/dashboard");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#3b88c3" }}>
        <Tabs v style={{ padding: "10px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "10px",
            }}
          >
            <img src="./kiddl-logo.webp" alt="Logo" height="50" />
          </div>
          <Tab
            style={{ color: "white", marginLeft: "10px" }}
            label="Activities"
          />
        </Tabs>
      </AppBar>
      <div style={{ margin: "10px" }}>
        <h1>Add New Activity</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "10px",
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            name="title"
            value={newActivity.title}
            onChange={handleInputChange}
          />
          <TextField
            label="Type"
            variant="outlined"
            name="type"
            value={newActivity.type}
            onChange={handleInputChange}
          />
          <TextField
            label="Education Type"
            variant="outlined"
            name="educationType"
            value={newActivity.educationType}
            onChange={handleInputChange}
          />
          <TextField
            label="Age Range"
            variant="outlined"
            name="ageRange"
            value={newActivity.ageRange}
            onChange={handleInputChange}
          />
          <TextField
            label="Engagement Time"
            variant="outlined"
            name="engagementTime"
            type="number"
            value={newActivity.engagementTime}
            onChange={handleNumberChange}
          />
          <TextField
            label="Time to Setup"
            variant="outlined"
            name="timeToSetup"
            type="number"
            value={newActivity.timeToSetup}
            onChange={handleNumberChange}
          />
          <TextField
            label="How to Play"
            variant="outlined"
            name="howToPlay"
            value={newActivity.howToPlay}
            onChange={handleInputChange}
          />
          <TextField
            label="How to Setup"
            variant="outlined"
            name="howToSetup"
            value={newActivity.howToSetup}
            onChange={handleInputChange}
          />

          <TextField
            label="Things Needed"
            variant="outlined"
            name="thingsNeeded"
            value={newActivity.thingsNeeded.join(", ")}
            helperText="Seperate different items with a comma"
            onChange={handleArrayChange}
          />
          <label>
            Mark as popular:
            <Checkbox
              name="popular"
              checked={newActivity.popular}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            Recommended:
            <Checkbox
              name="recommended"
              checked={newActivity.recommended}
              onChange={handleCheckboxChange}
            />
          </label>
          <Button variant="contained" color="primary" onClick={addActivityToDB}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddActivity;
