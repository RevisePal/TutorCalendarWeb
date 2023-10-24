import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db, doc, getDoc, updateDoc } from "../firebase";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const EditActivity = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [activityData, setActivityData] = useState({
    title: "",
    ageRange: "",
    educationType: "",
    engagementTime: 0,
    popular: false,
    thingsNeeded: [],
    timeToSetup: 0,
    type: "",
    howToPlay: "",
    howToSetup: "",
  });

  useEffect(() => {
    const fetchActivity = async () => {
      const activityRef = doc(db, "activities", id);
      const activitySnap = await getDoc(activityRef);

      if (activitySnap.exists()) {
        setActivityData(activitySnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchActivity();
  }, [id]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setActivityData({
      ...activityData,
      [field]: value,
    });
  };

  const handleSave = async (field) => {
    const activityRef = doc(db, "activities", id);
    await updateDoc(activityRef, {
      [field]: activityData[field],
    });
    setOpen(true);
  };
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#3b88c3" }}>
        <Tabs style={{ padding: "10px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "10px",
            }}
          >
            <img src="/kiddl-logo.webp" alt="Logo" height="50" />
          </div>
          <Tab
            style={{ color: "white", marginLeft: "10px" }}
            label="Activities"
            onClick={() => navigate("/dashboard")}
          />
        </Tabs>
      </AppBar>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Changes saved
        </Alert>
      </Snackbar>

      <div style={{ margin: "10px" }}>
        <h1>Edit Activity</h1>
        {activityData && (
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {Object.keys(activityData).map((field) => (
              <div
                key={field}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <TextField
                  label={field}
                  variant="outlined"
                  style={{ width: "50%" }}
                  value={activityData[field]}
                  onChange={(e) => handleInputChange(e, field)}
                />
                <IconButton onClick={() => handleSave(field)}>
                  <SaveIcon />
                </IconButton>
              </div>
            ))}
          </form>
        )}
      </div>
    </div>
  );
};

export default EditActivity;
