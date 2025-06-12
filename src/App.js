import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "/home/yahiya/Flutter Workspace/@lant/landing_page/landing-page/images";

function App() {
  return (
    <>
      <header>
        <h1>Atlant Computers</h1>
        <nav>
          <a href="#offers">Offers</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section id="offers" className="section">
          <h2>Best Offers</h2>
          <div className="offer-slider">
            {/* Insert offer images here */}
            <img src="images/offer1.jpg" alt="Offer 1" />
            <img src="images/offer2.jpg" alt="Offer 2" />
            <img src="images/offer3.jpg" alt="Offer 3" />
            <img src="images/offer4.jpg" alt="Offer 4" />
            <img src="images/offer5.jpg" alt="Offer 5" />
            <img src="images/offer6.jpg" alt="Offer 6" />
            <img src="images/offer7.jpg" alt="Offer 7" />
          </div>
        </section>

        <section id="services" className="section">
          <h2>Our Services</h2>
          <ul className="features-list">
            <li>Mobile SIM recharge and porting</li>
            <li>Redeem Atlant points for products worth 25+ SAR</li>
            <li>Mobile & Computer servicing</li>
            <li>
              Accessories: Chargers, Speakers, Smartwatches, Fans, Lights,
              Adaptors, WiFi devices, Tablets
            </li>
            <li>New, renewed, and used laptops</li>
            <li>Earphones, Printers and more</li>
          </ul>
        </section>

        <section id="experience" className="section">
          <h2>18+ Years of Experience</h2>
          <p>
            Atlant Computers has proudly served Khamis Mushayth, KSA, providing
            trusted and quality services for over 18 years.
          </p>
        </section>
      </main>

      <footer className="contact" id="contact">
        <p>Contact Us:</p>
        <a
          href="https://instagram.com/atlantcomputes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        |
        <a
          href="https://wa.me/966536314965"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>{" "}
        |
        <a
          href="mailto:info@atlantcomputers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </footer>
      <a
        href="https://wa.me/966536314965?text=Hi%20Atlant"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          zIndex: 9999,
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          width="28"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.797.727 5.429 2.004 7.742L0 32l8.488-2.225A15.92 15.92 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.417 0-4.729-.64-6.777-1.859l-.485-.284-5.036 1.32 1.339-4.914-.314-.505A13.25 13.25 0 012.667 16C2.667 8.64 8.64 2.667 16 2.667 23.36 2.667 29.333 8.64 29.333 16S23.36 29.333 16 29.333zm7.092-9.92c-.372-.186-2.197-1.086-2.54-1.211-.343-.125-.593-.186-.843.186-.25.37-.964 1.211-1.183 1.459-.22.248-.436.28-.808.093-.372-.186-1.572-.579-2.996-1.848-1.107-.99-1.852-2.214-2.07-2.585-.217-.372-.023-.573.163-.759.167-.167.372-.436.558-.654.186-.22.248-.372.372-.62.124-.248.062-.465-.03-.653-.094-.186-.843-2.027-1.154-2.77-.302-.724-.609-.626-.843-.637l-.718-.013c-.249 0-.653.093-.995.465s-1.305 1.273-1.305 3.105c0 1.833 1.334 3.601 1.52 3.849.186.248 2.627 4.008 6.369 5.62.891.384 1.584.613 2.124.786.892.283 1.705.243 2.348.147.716-.107 2.197-.897 2.509-1.763.31-.865.31-1.606.217-1.762-.093-.155-.34-.248-.712-.434z" />
        </svg>
      </a>

      <div className="footer">
        <p>© 2025 Atlant Computers - All Rights Reserved</p>
      </div>
    </>
  );
}

export default App;
''