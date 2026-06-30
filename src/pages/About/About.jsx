import "./About.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import heroVideo from "../../assets/images/videos/about-video.mp4";

import innovation from "../../assets/images/values/innovation.jpg";
import adventure from "../../assets/images/values/adventure.jpg";
import sustainability from "../../assets/images/values/sustainability.jpg";
import trust from "../../assets/images/values/trust.jpg";
import community from "../../assets/images/values/community.jpg";
import excellence from "../../assets/images/values/excellence.jpg";

import {
    FaRoute,
  FaMoneyBillWave,
  FaHotel,
  FaMapMarkedAlt,
  FaShoppingBag,
  FaCloudSun,
  FaStar,
  FaCalendarAlt,
  FaShieldAlt,
  FaUserCheck,
  FaHeadset,
  FaUsers,
  FaGlobe
} from "react-icons/fa";

import gallery1 from "../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../assets/images/gallery/gallery6.jpg";




function About() {
const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6
];
const values=[
{
title:"Adventure",
image:adventure,
desc:"We inspire people to discover beautiful places and create unforgettable journeys."
},
{
title:"Innovation",
image:innovation,
desc:"Modern travel tools help users plan smarter and travel with confidence."
},
{
title:"Sustainability",
image:sustainability,
desc:"We encourage eco-friendly tourism that protects nature and local cultures."
},
{
title:"Trust",
image:trust,
desc:"Reliable travel information and transparent recommendations for every traveler."
},
{
title:"Community",
image:community,
desc:"Connecting travelers across the world through shared experiences."
},
{
title:"Excellence",
image:excellence,
desc:"Delivering exceptional travel planning experiences with quality and care."
}
];
const features = [
  {
    icon: <FaRoute />,
    title: "Smart Trip Planning",
    desc: "Create personalized travel itineraries with destination recommendations and day-wise planning."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Budget Calculator",
    desc: "Estimate your travel expenses including accommodation, transport, food, and activities."
  },
  {
    icon: <FaHotel />,
    title: "Nearby Hotels",
    desc: "Find comfortable hotels and accommodations near your destination with ease."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Nearby Attractions",
    desc: "Discover famous landmarks, restaurants, shopping areas, and hidden gems around you."
  },
  {
    icon: <FaShoppingBag />,
    title: "Souvenir Guide",
    desc: "Explore authentic local souvenirs and traditional handicrafts to remember your journey."
  },
  {
    icon: <FaCloudSun />,
    title: "Best Time to Visit",
    desc: "Get weather insights and seasonal recommendations to plan your perfect vacation."
  },
  {
    icon: <FaStar />,
    title: "Traveler Reviews",
    desc: "Read genuine reviews and ratings from fellow travelers before planning your trip."
  },
  {
    icon: <FaCalendarAlt />,
    title: "Personalized Itinerary",
    desc: "Generate organized day-by-day travel schedules based on your interests and budget."
  }
];
const journey = [
  {
    icon: <FaGlobe />,
    number: "50+",
    title: "Destinations"
  },
  {
    icon: <FaUsers />,
    number: "10K+",
    title: "Travelers"
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "100+",
    title: "Travel Guides"
  },
  {
    icon: <FaStar />,
    number: "4.9",
    title: "Average Rating"
  }
];

const testimonials = [
  {
    name: "Emma Johnson",
    country: "United Kingdom",
    review:
      "Aurora World made planning our honeymoon effortless. Every recommendation was perfect."
  },
  {
    name: "Rahul Sharma",
    country: "India",
    review:
      "The itinerary planner saved us hours of work. Amazing destinations and great travel tips."
  },
  {
    name: "Sophia Lee",
    country: "Singapore",
    review:
      "Beautiful interface, easy navigation and excellent recommendations for every trip."
  }
];

const gallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6
];

return(
<>

<Navbar/>
<div className="about-page">
<section className="hero-wrapper">
<video
className="hero-video"
autoPlay
muted
loop
playsInline
>

<source
src={heroVideo}
type="video/mp4"
/>

</video>
</section>

<section className="about-section">
 <div className="content-container">
<h2 className="section-title">
About Aurora World
</h2>

<p className="about-text">

Aurora World is your trusted travel companion designed to make every journey
simple, memorable and inspiring. Whether you're planning your first vacation,
exploring hidden destinations or creating a dream itinerary, Aurora World
helps you discover the world's beauty with confidence.

</p>

<p className="about-text">

Our platform combines destination discovery, travel planning, budgeting and
personalized recommendations into one seamless experience so every traveler
can enjoy stress-free adventures.

</p>
</div>
</section>
<section className="features-section">
<div className="features-container">
    <h2 className="section-title">
        Why Choose Aurora World
    </h2>

    <div className="features-grid">

        {features.map((item,index)=>(
            <div className="feature-card" key={index}>

                <div className="feature-icon">
                    {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

            </div>
        ))}
</div>
    </div>

</section>
<section className="journey-section">
<div className="journey-container">
    <h2 className="section-title">
        Our Journey
    </h2>

    <div className="journey-grid">

        {journey.map((item,index)=>(
            <div className="journey-card" key={index}>

                <div className="journey-icon">
                    {item.icon}
                </div>

                <h2>{item.number}</h2>

                <p>{item.title}</p>

            </div>
        ))}

    </div>
</div>
</section>


<section className="values-section">
  <div className="content-container">

        <h2 className="section-title">
            Our Values
        </h2>

        <div className="values-grid">

            {values.map((item,index)=>(
                <div className="value-card" key={index}>
                    <img src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}

        </div>

    </div>
</section>
<section className="testimonial-section">
<div className="testimonials-container">
    <h2 className="section-title">
        Traveler Testimonials
    </h2>

    <div className="testimonial-grid">

        {testimonials.map((item,index)=>(
            <div className="testimonial-card" key={index}>

                <div className="stars">
                    ★★★★★
                </div>

                <p className="review">
                    "{item.review}"
                </p>

                <h4>{item.name}</h4>

                <span>{item.country}</span>

            </div>
        ))}

    </div>
</div>
</section>
<section className="gallery-section">

    <div className="gallery-container">

        <h2 className="section-title">
            Destination Gallery
        </h2>

        <div className="gallery-grid">

            {galleryImages.map((img, index) => (

                <div className="gallery-card" key={index}>

                    <img
                        src={img}
                        alt={`Destination ${index + 1}`}
                    />

                </div>

            ))}

        </div>

    </div>

</section>
</div>
<Footer/>

</>

);

}

export default About;