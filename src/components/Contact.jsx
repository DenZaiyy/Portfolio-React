import React, {useEffect} from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({disable: 'mobile'});
    }, [])
    return (
        <div name='contact' className={`w-full h-screen bg-[#0a192f] flex justify-center items-center p-4`}>
            <form method="POST" action="https://getform.io/f/3d8a28bc-7102-466a-a3ca-f2b681341551" className={`flex flex-col max-w-[600px] w-full`}>
                <div className={`pb-8`}>
                    <p className={`text-4xl font-bold inline border-b-4 border-[#f44b3a] text-gray-300`} data-aos="fade-right" data-aos-easing="ease-in-sine">Contact</p>
                    <p className={`text-gray-300 py-4`} data-aos="fade-up" data-aos-duration="1500">// Submit the form below or shoot me an <a href="mailto:grischko.kevin@gmail.com">email</a></p>
                </div>
                <input className={`bg-[#ccd6f6] p-2`} type="text" placeholder='Name' name='name' />
                <input className={`my-4 p-2 bg-[#ccd6f6]`} type="email" placeholder='Email' name='email' />
                <textarea className={`bg-[#ccd6f6] p-2`} name="message" rows="10" placeholder={`Message`}></textarea>
                <button className={`text-white border-2 hover:bg-[#f44b3a] hover:border-[#f44b3a] px-4 py-3 my-8 mx-auto flex items-center`}>Let's collaborate</button>
            </form>
        </div>
    );
};

export default Contact;
