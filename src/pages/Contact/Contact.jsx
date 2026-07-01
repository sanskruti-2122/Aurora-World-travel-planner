import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import heroImage from "../../assets/images/contact/contact-hero.jpg";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope
} from "react-icons/fa";

function Contact() {

    return (
        <>

            <Navbar />

            <div className="contact-page">

                {/* Hero */}

                <section className="contact-hero">

                    <img
                        src={heroImage}
                        alt="Aurora World Contact"
                        className="contact-hero-image"
                    />

                </section>

                {/* Contact */}

                <section className="contact-section">

                    <div className="contact-container">
<p className="contact-tag">GET IN TOUCH</p>

                        <h2 className="contact-title">
                            Aurora World
                        </h2>

                        <p className="contact-subtitle">
                            We'd love to hear from you. Reach out anytime and let us help you plan your next unforgettable journey.
                        </p>

                        <div className="contact-card">

                            <div className="contact-item">

                                <FaMapMarkerAlt className="contact-icon" />

                                <div>

                                    <h3>Address</h3>

                                    <p>
                                        Aurora World Headquarters<br />
                                        Pune, Maharashtra, India
                                    </p>

                                </div>

                            </div>

                            <div className="contact-item">

                                <FaPhoneAlt className="contact-icon" />

                                <div>

                                    <h3>Phone</h3>

                                    <p>
                                        +91 98765 43210
                                    </p>

                                </div>

                            </div>

                            <div className="contact-item">

                                <FaEnvelope className="contact-icon" />

                                <div>

                                    <h3>Email</h3>

                                    <p>
                                        support@auroraworld.com
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

            <Footer />

        </>
    );
}

export default Contact;