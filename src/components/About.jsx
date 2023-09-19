import Reactn,  {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section name="about" className="section">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8" data-aos="fade-down">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#f44b3a]">About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold" data-aos="fade-right" data-aos-offset="200" data-aos-duration="2000">
                        <p>Hi, I'm Kevin, nice to meet you ! Please take a look around.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="2000">
                        <p>I'm passionate about programming, i'm currently develop my project for my exam, i'll try to obtain them and continue to a next challenge. I'm currently study at Elan Formation, and my study end at 4th august.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
