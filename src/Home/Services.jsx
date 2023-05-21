import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="bg-slate-400">
            <div className="text-4xl font-semibold text-warning text-center py-5" data-aos="fade-up">Our Services</div>
            <div>
                <div className="lg:flex justify-around items-start">
                    <div data-aos="fade-up">
                        <div className="text-3xl font-semibold py-3">Best Toys</div>
                        <div>We understand the importance of providing children <br />
                            with toys that encourage growth, creativity, and boundless <br />
                            fun. That's why we carefully curate our collection, <br />
                            ensuring that we offer the finest options available.
                        </div>
                        <div className="py-3"><button className="btn btn-primary">More</button></div>
                    </div>

                    <div data-aos="fade-up">
                        <div className="text-3xl font-semibold py-3">Customize Design</div>
                        <div>Step into our world of creativity, where we work closely <br />
                            with you to craft a toy that perfectly reflects your vision. <br /> Our skilled team will guide you through the process, <br /> ensuring every detail is tailored to your specifications.
                        </div>
                        <div className="py-3"><button className="btn btn-primary">More</button></div>
                    </div>

                    <div data-aos="fade-up">
                        <div className="text-3xl font-semibold py-3">Free Servicing</div>
                        <div>Experience peace of mind knowing that we stand behind <br />
                            the toys we offer. Our commitment to your satisfaction <br />
                            extends beyond the initial purchase, with our dedicated <br />
                            team ready to address any concerns you may have.
                        </div>
                        <div className="py-3"><button className="btn btn-primary">More</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
