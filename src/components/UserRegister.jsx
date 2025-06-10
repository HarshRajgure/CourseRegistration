    // src/components/UserRegister.jsx

    /*import React, { useState } from "react";
    import { auth, database } from "../firebase";
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { ref, set } from "firebase/database";
    import { useNavigate } from "react-router-dom";

    const UserRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        // Save extra user data in Realtime Database
        await set(ref(database, "users/" + userId), {
            fullName,
            email,
        });

        alert("Registration successful!");
        navigate("/login");
        } catch (error) {
        alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">User Registration</h2>
        <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
        />
        <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Register
        </button>
        </form>
    );
    };

    export default UserRegister;
*/