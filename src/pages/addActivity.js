import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, doc, getDoc } from "../firebase";

const AddActivity = () => {
  const { id } = useParams();
  const [activityData, setActivityData] = useState(null);

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

  return (
    <div>
      <h1>Edit Activity</h1>
      {activityData && (
        <div>
          {/* Display fields here. For example: */}
          <div>Title: {activityData.title}</div>
          {/* Add other fields similarly */}
        </div>
      )}
    </div>
  );
};

export default AddActivity;
