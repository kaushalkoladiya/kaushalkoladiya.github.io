import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Kaushal Koladiya</h1>
          <p>
            I'm {" "}
            <ReactTypingEffect
              text={["Developer", "Freelancer", "Learner"]}
              speed={100}
            />
          </p>
          <div className="social-links">
            <a href="https://twitter.com/kaushalkoladiya" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/kaushal.koladiya.1/" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/kaushalkoladiya/" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/kaushalkoladiya/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero