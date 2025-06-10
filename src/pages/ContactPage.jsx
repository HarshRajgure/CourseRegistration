// src/pages/ContactPage.jsx
import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
