import React from "react";
import '../../../App.css';
import Footer from '../../Footer.js';
import ContactSection from './ContactSection.js';
import ContactInfoSection from "./ContactInfoSection";

export default function Contact() {
    return (

        <>
            <ContactSection />
            <ContactInfoSection />
            <Footer />
        </>
    );
}