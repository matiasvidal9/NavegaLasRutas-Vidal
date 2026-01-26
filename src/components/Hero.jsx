import "../css/Hero.css";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
    return (
    <section className="hero-section">
        {/* Usamos un div de fondo para mejor control o la img con object-fit */}
        <img src={heroImg} alt="LOOk Collection" className="hero-image" />
        <div className="hero-overlay">
            <h1 className="hero-title">LOOK</h1>
            <p className="hero-subtitle">NEW ARRIVALS 2025</p>
        </div>
    </section>
    );
};

export default Hero;
