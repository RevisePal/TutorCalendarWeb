import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { db, getDocs, collection } from "../firebase";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const message = localStorage.getItem("activityAdded");
    if (message) {
      setOpen(true);
      localStorage.removeItem("activityAdded");
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCardClick = (id) => {
    navigate(`/editActivity/${id}`);
  };

  const handleAddActivity = () => {
    navigate("/addActivity");
  };

  useEffect(() => {
    const fetchActivities = async () => {
      const querySnapshot = await getDocs(collection(db, "activities"));
      const fetchedActivities = [];
      querySnapshot.forEach((doc) => {
        fetchedActivities.push({ id: doc.id, title: doc.data().title });
      });
      setActivities(fetchedActivities);
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#3b88c3" }}>
        <Tabs value={value} onChange={handleChange} style={{ padding: "10px" }}>
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

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Activity added successfully
        </Alert>
      </Snackbar>

      {value === 0 && (
        <div
          style={{ display: "flex", flexDirection: "column", margin: "20px" }}
        >
          <h2>Activities</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddActivity}
            style={{ width: "200px" }}
          >
            Add New Activity
          </Button>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            {activities.map((activity) => (
              <Card
                key={activity.id}
                onClick={() => handleCardClick(activity.id)}
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                <CardContent>{activity.title}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
