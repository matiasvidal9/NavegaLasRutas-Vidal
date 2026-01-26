import "../css/Hero.css";
import heroImg from "../assets/heroImg.png";
import ItemListContainer from "./ItemListContainer";

const Hero = () => {
    return (
    <section className="hero-section">
        <img src={heroImg} alt="LOOk Collection" className="hero-image" />
        <div className="hero-overlay">
        <ItemListContainer greeting="New Arrivals: Season 2025" />
        </div>
    </section>
    );
};

export default Hero;