import React from 'react';
import KGAMING from '../assets/Works/K-GAMING.png';
import Session from '../assets/Works/session.png';

const WorkItem = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.image})`}}
             className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div`}>

            {/* Hover Effects */}
            <div className={`opacity-0 group-hover:opacity-100 duration-300 text-center`}>
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
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className={`max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full`}>
                <div className={`pb-8`}>
                    <p className={`text-4xl font-bold inline border-b-4 text-gray-300 border-[#f44b3a]`}>Work</p>
                    <p className={`py-6`}>// Check out some of my recent work</p>
                </div>

                <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4`}>
                    <WorkItem image={KGAMING} desc={`K-GAMING | Symfony 6 Application`} demo={`https://k-gaming.k-grischko.fr/`} code={`https://github.com/DenZaiyy/K-Gaming`}/>
                    <WorkItem image={Session} desc={`SESSION | Symfony 6 Application`} demo={`https://session.k-grischko.fr/`} code={`https://github.com/DenZaiyy/sfSessionTW`}/>
                </div>
            </div>
        </div>
    );
};

export default Work;
