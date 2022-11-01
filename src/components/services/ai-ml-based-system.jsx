const AiMlSystem = () => {
    return (
        <div className="container my-3">
            <div className="py-2">
                <span className="text-warning fw-bold"><i className="fa fa-info-circle"></i> We can build the different artificial models using the advanced algorithms that can help you grow your bussiness.</span>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-none d-md-block"><img src="/img/services/ai-ml/ml.jpg" alt="" className="w-100 h-100" /></div>
                </div>
                <div className="col-md-6">
                    <div className=""><img src="/img/services/ai-ml/ai1.jpg" alt="" className="w-100" /></div>
                    <div className=" py-2">
                        <span className="fs-3">A</span>rtificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals.
                        <br /> <br />
                        <span className="fs-3">M</span>achine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks.
                    </div>
                </div>
            </div>
            <div className="my-3">
                <div className="h3 py-2">Applications of intelligent artificial system</div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="ai-applicationlist">
                            <li className="py-2 fw-bold">Deep learning applications</li>
                            <li className="py-2 fw-bold">Predictive analytics</li>
                            <li className="py-2 fw-bold">Translation</li>
                            <li className="py-2 fw-bold">Classfication and clustering of dataset</li>
                            <li className="py-2 fw-bold">Information extraction</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="ai-applicationlist">
                            <li className="py-2 fw-bold">Image recognition</li>
                            <li className="py-2 fw-bold">Planning, scheduling and optimization</li>
                            <li className="py-2 fw-bold">Translation</li>
                            <li className="py-2 fw-bold">Machine vision and robotics</li>
                            <li className="py-2 fw-bold">Expert systems</li>
                            <li className="py-2 fw-bold">Speect to text and vice-versa</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <div className="h3 py-2">Classification of artificial intelligence</div>
                <div>
                    <img src="/img/services/ai-ml/ai-classifications.jpg" alt="" className="w-100"/>
                </div>
            </div>
        </div>
    );
}
 
export default AiMlSystem;