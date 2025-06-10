import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, update } from "firebase/database";
import { app } from "../firebase";
import "./Profile.css";

function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    city: "",
    qualification: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const auth = getAuth(app);
  const db = getDatabase(app);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userRef = ref(db, `users/${currentUser.uid}`);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      });
    }
  }, [auth, db]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userRef = ref(db, `users/${currentUser.uid}`);
      update(userRef, userData)
        .then(() => {
          setIsEditing(false);
          alert("Profile updated successfully!");
        })
        .catch((error) => {
          alert("Error updating profile: " + error.message);
        });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>My Profile</h2>

      {!isEditing ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>City:</strong> {userData.city}</p>
          <p><strong>Qualification:</strong> {userData.qualification}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      ) : (
        <div>
          <label>Name:</label>
          <input name="name" value={userData.name} onChange={handleChange} type="text" /><br />
          <label>Email:</label>
          <input name="email" value={userData.email} onChange={handleChange} type="email" /><br />
          <label>City:</label>
          <input name="city" value={userData.city} onChange={handleChange} type="text" /><br />
          <label>Qualification:</label>
          <input name="qualification" value={userData.qualification} onChange={handleChange} type="text" /><br />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
