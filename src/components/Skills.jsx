import React, {useEffect} from 'react';
import HTML from '../assets/Skills/html.png';
import CSS from '../assets/Skills/css.png';
import JS from '../assets/Skills/js.png';
import PHP from '../assets/Skills/php.png';
import REACT from '../assets/Skills/react.png';
import SASS from '../assets/Skills/sass.png';
import TAILWIND from '../assets/Skills/tailwind_css.png';
import SYMFONY from '../assets/Skills/symfony.png';
import AOS from "aos";
import 'aos/dist/aos.css';


function Skill(props) {
    return (
        <div className="shadow-sm shadow-[#040c16] p-4 hover:scale-110 duration-500" data-aos={props.aos} data-aos-duration={props.duration} data-aos-delay={props.delay}>
            <img className="w-20 mx-auto z-1" src={props.src} alt={`${props.name} icon`}/>
            <p className="mt-4">{props.name}</p>
        </div>
    );
}

const Skills = () => {
    useEffect(() => {
        AOS.init({disable: 'mobile'});
    }, [])
    return (
        <section name="skills" className="section">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full" >
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#f44b3a]" data-aos="fade-right" data-aos-easing="ease-in-sine">Skills</p>
                    <p className="py-4" data-aos="fade-up" data-aos-duration="1500">// These are the technologies i've worked with</p>
                </div>
                
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
                    <Skill name="HTML 5" src={HTML} aos="fade-right" duration="1000" delay="100"/>
                    <Skill name="CSS 3" src={CSS} aos="fade-right" duration="1000" delay="100"/>
                    <Skill name="JS" src={JS} aos="fade-left" duration="1000" delay="100"/>
                    <Skill name="SASS" src={SASS} aos="fade-left" duration="1000" delay="100"/>
                    <Skill name="PHP 8.2" src={PHP} aos="fade-right" duration="1000" delay="100"/>
                    <Skill name="SYMFONY 6.2" src={SYMFONY} aos="fade-right" duration="1000" delay="100"/>
                    <Skill name="REACT" src={REACT} aos="fade-left" duration="1000" delay="100"/>
                    <Skill name="TAILWIND" src={TAILWIND} aos="fade-left" duration="1000" delay="100"/>
                </div>
            </div>
        </section>
    );
};

export default Skills;
