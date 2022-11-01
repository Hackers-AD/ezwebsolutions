const HealthCare = () => {
    return (
        <div className="container my-3">
            <div className="row py-2">
                <div className="col-md-6 py-2">
                    <div className="h3">Artificial intelligence in healthcare</div>
                    <div>
                        <span className="fs-3">T</span>he use of machine learning (ML) algorithms and other cognitive technologies in healthcare is referred to as artificial intelligence (AI). AI can be defined simply as the ability of computers and other devices to replicate human cognition and to learn, think, and make decisions or take actions. Therefore, AI in healthcare refers to the application of machines to analyze and take action on medical data, frequently with the aim of forecasting a specific outcome.
                        <br /><br />
                        <span className="fs-3">T</span>he use of ML and other cognitive disciplines for medical diagnosis is an important use of AI in healthcare. AI can assist doctors and other healthcare professionals in providing more precise diagnoses and treatment recommendations by using patient data and other information.Aside from that, AI can enhance preventative care suggestions for patients by analyzing large data to make healthcare more proactive and predictive.
                    </div>
                </div>
                <div className="col-md-6 py-2 ">
                    <img src="/img/industries/healthcare/ai-healthcare.jpeg" alt="" className="w-100 h-100" />
                </div>
            </div>
            <div className="my-3">
                <div className="h3 pt-5 pb-1">Benefits of using AI in healthcare</div>
                <div className="row align-items-center">
                    <div className="col-md-6 py-2">
                        <ul className="ai-applicationlist">
                            <li className="py-2 fs-5 fw-bold">Ability to analyse data and improve diagnosis</li>
                            <li className="py-2 fs-5 fw-bold">Carry out administrative and routine tasks</li>
                            <li className="py-2 fs-5 fw-bold">Health monitoring and digital consultations</li>
                            <li className="py-2 fs-5 fw-bold">Early disease detection and treatment</li>
                            <li className="py-2 fs-5 fw-bold">Medical researches and training</li>
                            <li className="py-2 fs-5 fw-bold">Decision making in healthcare</li>
                        </ul>
                    </div>
                    <div className="col-md-6 py-2">
                        <img src="/img/industries/healthcare/ai-benefits.png" alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HealthCare;