import React, {useEffect} from 'react';
import KGAMING from '../assets/Works/K-GAMING.png';
import Session from '../assets/Works/session.png';
import FORUM from '../assets/Works/Forum.png';
import CINEMA from '../assets/Works/CINEMA.png';
import LANDINGPAGE from '../assets/Works/Landing-Page.png';
import BRASSERIEIMHOFF from '../assets/Works/Brasserie-IMHOFF.png';
import AOS from "aos";
import 'aos/dist/aos.css';

const WorkItem = (props) => {
    useEffect(() => {
        AOS.init({disable: 'mobile'});
    }, [])
    return (
        <div style={{backgroundImage: `url(${props.image})`}}
             className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}
             data-aos={`fade-${props.aos}`} data-aos-duration={props.duration} >

            {/* Hover Effects */}
            <div className={`hidden group-hover:block duration-300 text-center`}>
                <span className={`text-2xl font-bold text-white tracking-wider`}>{props.desc}</span>
                <div className={`pt-8 text-center`}>
                    <a href={props.demo} rel="noreferrer" target="_blank">
                        <button className={`rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-[#f44b3a] duration-300`}>Demo</button>
                    </a>
                    <a href={props.code} rel="noreferrer" target="_blank">
                        <button className={`rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-[#f44b3a] duration-300`}>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

const Work = () => {
    return (
        <section name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className={`max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full`}>
                <div className={`pb-8`}>
                    <p className={`text-4xl font-bold inline border-b-4 text-gray-300 border-[#f44b3a]`} data-aos="fade-right" data-aos-easing="ease-in-sine">Work</p>
                    <p className={`py-6`} data-aos="fade-up" data-aos-duration="1500">// Check out some of my recent work</p>
                </div>

                <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4`}>
                    <WorkItem image={KGAMING} desc={`K-GAMING | Symfony 6 Application`} demo={`https://k-gaming.k-grischko.fr/`} code={`https://github.com/DenZaiyy/K-Gaming`} aos='right' duration='1500' />
                    <WorkItem image={Session} desc={`SESSION | Symfony 6 Application`} demo={`https://session.k-grischko.fr/`} code={`https://github.com/DenZaiyy/sfSessionTW`} aos='down' duration='1500' />
                    <WorkItem image={FORUM} desc={`FORUM | PHP Application`} demo={`https://forum.k-grischko.fr/`} code={`https://github.com/DenZaiyy/SQL_Forum`} aos='left' duration='1500' />
                    <WorkItem image={CINEMA} desc={`CINEMA | PHP Application`} demo={`https://cinema.k-grischko.fr/`} code={`https://github.com/DenZaiyy/SQL_Cinema`} aos='right' duration='1500' />
                    <WorkItem image={LANDINGPAGE} desc={`LANDING-PAGE | HTML CSS JS Application`} demo={`https://landing-page-denz.netlify.app/`} code={`https://github.com/DenZaiyy/Landing-page`} aos='up' duration='1500' />
                    <WorkItem image={BRASSERIEIMHOFF} desc={`BRASSERIE-IMHOFF | HTML CSS JS Application`} demo={`https://brasserie-imhoff.netlify.app/`} code={`https://github.com/DenZaiyy/BrasserieIMHOFF`} aos='left' duration='1500' />
                </div>
            </div>
        </section>
    );
};

export default Work;
