// StudentList.jsx
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const db = getDatabase(app);

  useEffect(() => {
    const studentsRef = ref(db, "students");

    const unsubscribe = onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const studentArray = Object.entries(data).map(([id, student]) => ({
          id,
          ...student,
        }));
        setStudents(studentArray);
      } else {
        setStudents([]);
      }
    });

    return () => unsubscribe();
  }, [db]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Students</h2>
      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Address</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.course}</td>
                <td>{student.mobile}</td>
                <td>{student.city}</td>
                <td>{student.address}</td>
                <td>{student.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
