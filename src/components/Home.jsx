import React, {useEffect} from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#f44b3a]" data-aos="fade-down" data-aos-duration="2000">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100">Kevin GRISCHKO</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">I'm a Junior Web Developer.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">I'm a junior web developer specializing in back-end
                    (mainly with Symfony). Currently, I'm looking for work-study program to continue my career, which
                    will enable me to become an "Application Developer & Designer"</p>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                    <button
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f44b3a] hover:border-[#f44b3a]">View
                        work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3"/>
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;
