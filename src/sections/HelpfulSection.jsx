import HelpfulComponent from "../components/HelpfulComponent/HelpfulComponent.jsx";

const HelpfulSection = () => {
    const cardsInfo = [
        {
            title: "Download: The Estate Planning Starter Kit",
            description : "A practical guide to help you feel more prepared before we meet."
        },
        {
            title: "Browse Common Questions",
            description: " We’ve compiled answers to the most frequently asked questions about estate planning, legal fees, and what to expect."
        },
        {
            title: "Read Real Client Stories",
            description: "See how families and individuals like you found clarity and relief working with Northside Law."
        }
    ]
    return (
        <section className="helpful-section">
            <h2>Helpful Resources While You Wait</h2>
            <div className="card-container">
                {
                    cardsInfo.map((card) => <HelpfulComponent title={card.title} description={card.description} />)
                }
            </div>

        </section>
    );
}

export default HelpfulSection;