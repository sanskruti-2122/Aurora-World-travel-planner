import "./TourismSection.css";

import tourismVideo1 from "../../assets/images/videos/tourismVideo1.mp4";
import tourismVideo2 from "../../assets/images/videos/tourismVideo2.mp4";
import charity from "../../assets/images/charity.png";
import { PiPlantFill } from "react-icons/pi";
function TourismSection() {
    return (
        <section className="tourism">

            {/* Main Heading */}
            <div className="section-heading">
                <h1>Discover the Beauty of the World</h1>
                <p>
                    Explore breathtaking destinations, unforgettable adventures,
                    and meaningful travel experiences with Aurora World.
                </p>
            </div>

            {/* Section 1 */}
            <div className="tourism-row">

                <div className="tourism-media">

    <div className="media-frame">

        <video
            autoPlay
            muted
            loop
            playsInline
        >
            <source src={tourismVideo1} type="video/mp4" />
        </video>
<span className="star star1">✦</span>
<span className="star star2">✦</span>
<span className="star star3">✦</span>
    </div>

</div>
                <div className="tourism-content">
                    <h2>Escape to Tropical Paradise</h2>

                    <p>
                        Experience crystal-clear waters, golden beaches, and breathtaking islands from above. Let every destination inspire your next unforgettable journey with Aurora World.
                    </p>
                </div>

            </div>

            {/* Section 2 */}
            <div className="tourism-row">

    <div className="tourism-content">

        <h2>Adventure Beyond the Horizon</h2>

        <p>
           Wander through majestic mountain peaks, peaceful forests, and scenic trails. Every adventure is an opportunity to discover breathtaking landscapes and create memories that last forever.
        </p>

    </div>

    <div className="tourism-media">

        <div className="media-frame">

            <video autoPlay muted loop playsInline>
                <source src={tourismVideo2} type="video/mp4"/>
            </video>
            <span className="star star1">✦</span>
<span className="star star2">✦</span>
<span className="star star3">✦</span>

        </div>

    </div>

</div>

           {/* Charity Heading */}
<div className="charity-heading">

    <div className="heading-icon">
        <span className="line"></span>
        <PiPlantFill className="leaf-icon" />
        <span className="line"></span>
    </div>

    <h1>
        Plant Trees,
        <span> Create Futures</span>
    </h1>

    <p>
        Every tree planted is a step towards a greener tomorrow.
    </p>

    <div className="heading-divider">
        <span></span>
        ◆
        <span></span>
    </div>

</div>

{/* Charity Image Frame */}
<div className="charity-frame">

    <section
        className="tree-section"
        style={{ backgroundImage: `url(${charity})` }}
    >

        <div className="tree-overlay">

            <span className="tree-tag">
                🌱 TREE PLANTATION INITIATIVE
            </span>

            <h1>
                Travel with
                <br />
                <span>Purpose</span>
            </h1>

            <h3>
                Plant Trees. Restore Nature.
                <br />
                Build a Greener Tomorrow.
            </h3>

            <p>
                Every journey with Aurora World can create a positive impact.
                Join our Tree Plantation Initiative and help restore forests,
                improve biodiversity, reduce carbon emissions, and leave behind
                a healthier planet for future generations.
            </p>

            <button className="tree-btn">
                🌿 Join the Initiative
            </button>

            <div className="tree-stats">

                <div className="stat-card">
                    <h2>25K+</h2>
                    <span>Trees Planted</span>
                </div>

                <div className="stat-card">
                    <h2>12K+</h2>
                    <span>Volunteers</span>
                </div>

                <div className="stat-card">
                    <h2>350+</h2>
                    <span>Forests Restored</span>
                </div>

                <div className="stat-card">
                    <h2>15+</h2>
                    <span>Communities Helped</span>
                </div>

            </div>

        </div>

    </section>

</div>
        </section>
    );
}

export default TourismSection;