import heroImage from "../assets/imgs/lawyer_logo.png"
const HeroSection = () => {
    return (
       <section className="hero-section">
           <div>
               <span>
                   <i className="lni lni-check icon"></i>
                   <h2>You’re all set.</h2>
               </span>
               <p>
                   Thanks for booking with Northside Law—your free consultation is confirmed. One of our team members will follow up shortly with confirmation details and what to expect next. You’ve taken an important first step toward protecting your rights and securing peace of mind.
               </p>
               <img src={heroImage} alt="lawyer logo"/>
           </div>
       </section>
    );
}

export default HeroSection;