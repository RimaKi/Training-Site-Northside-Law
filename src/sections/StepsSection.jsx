import StepCardComponent from "../components/StepCardComponent/StepCardComponent.jsx"

const StepsSection = () => {
    const cardsInfo = [
        {
            icon: "lni lni-check-circle-1",
            title: "Check your email.",
            description: "A confirmation with your appointment details is on its way. It includes everything you need to prepare."
        },
        {
            icon: "lni lni-message-3-text",
            title: "We’ll Be in Touch",
            description: "Our team will reach out to confirm and answer any quick questions before your meeting."
        },
        {
            icon: "lni lni-thumbs-up-3",
            title: "You’ll Get Clear Guidance",
            description: "During your consultation, we’ll walk through your situation, offer legal insights, and explain your options in plain English."
        }
    ]
    return (
        <section className="steps-section">
            <h2>What Happens Next</h2>
            <div className="cards-container">
                {
                    cardsInfo.map((card)=> <StepCardComponent icon={card.icon} title={card.title} description={card.description} />)
                }
            </div>
            <div className="footer-step-section">
                <p><span>Need to Make a Change? </span>
                    No problem. Reply to your confirmation email or call us at (312) 555-8704 and we’ll be happy to
                    help.</p>
            </div>

        </section>
    );
}

export default StepsSection;