const AndroidIosApp = () => {
    const workimages = ['/img/ai.jpg', '/img/aboutbg.jpg']
    return (
        <div className="container my-3">
            <div className="">
                <span className="text-warning fw-bold"><i className="fa fa-info-circle"></i> We build full-fledge mobile apps both for android as well as iOS devices. The goal of our team is to create the best solutions, which we hope you will see in real life too.</span>
            </div>
            <div className="row">
                <div className="col-md-6 py-2">
                    <div className="">
                        <div className="text-center">
                            <div><img src="/img/services/app/android.png" alt="" className="app-icons rounded-circle"/></div>
                            <div className="fs-3 fw-bold py-2">Android app</div>
                        </div>
                        <div><span className="fs-3">A</span>ndroid is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the Open Handset Alliance and commercially sponsored by Google. It was unveiled in November 2007, with the first commercial Android device, the HTC Dream, being launched in September 2008.</div>
                    </div>
                </div>
                <div className="col-md-6 py-2">
                    <div className="">
                        <div className="text-center">
                            <div><img src="/img/services/app/ios.png" alt="" className="app-icons rounded-circle"/></div>
                            <div className="fs-3 fw-bold py-2">iOS app</div>
                        </div>
                        <div><span className="fs-3">iOS</span> (formerly iPhone OS) is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices, including the iPhone; the term also included the versions running on iPads until iPadOS was introduced in 2019, as well as on the iPod Touch devices, which were discontinued in mid-2022. It is the world's second-most widely installed mobile operating system, after Android. It is the basis for three other operating systems made by Apple: iPadOS, tvOS, and watchOS. It is proprietary software, although some parts of it are open source under the Apple Public Source License and other licenses.</div>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <div className="h3 py-2">Features we provide in mobile apps</div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="ai-applicationlist">
                            <li className="py-2 fw-bold">Users and accounts</li>
                            <li className="py-2 fw-bold">Admin panel and analytic tools</li>
                            <li className="py-2 fw-bold">Date and Location Management</li>
                            <li className="py-2 fw-bold">Integrations</li>
                            <li className="py-2 fw-bold">Payment and ecommerce</li>
                            <li className="py-2 fw-bold">User-generated content</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="ai-applicationlist">
                            <li className="py-2 fw-bold">Messaging and user engagement</li>
                            <li className="py-2 fw-bold">Multi-device synchronization</li>
                            <li className="py-2 fw-bold">Push notifications</li>
                            <li className="py-2 fw-bold">Security</li>
                            <li className="py-2 fw-bold">Accessibility features</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="my-3">
                <div className="h3">Technologies we use for mobile app development</div>
                <div className="row py-2">
                    <div className="col-auto py-2">
                        <div className="badge bg-warning p-4 rounded fs-5">React Native</div>
                    </div>
                    <div className="col-auto py-2">
                        <div className="badge bg-warning p-4 rounded fs-5">Flutters</div>
                    </div>
                    <div className="col-auto py-2">
                        <div className="badge bg-warning p-4 rounded fs-5">Google Firebase</div>
                    </div>
                    <div className="col-auto py-2">
                        <div className="badge bg-warning p-4 rounded fs-5">Django</div>
                    </div>
                </div>
            </div>

            <div className="my-3">
                <div className="h3">Our works on mobile apps development</div>
                <div className="row py-2">
                    {workimages.map((img, idx) => {
                        return(
                            <div className="col-md-4 workimg-container py-2" key={idx}>
                                <img src={img} alt="" className="w-100 h-100 workimg"/>
                                <div className="workimg-btn">
                                    <button className="btn btn-outline-warning btn-rounded-lg">
                                        View Work <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default AndroidIosApp;