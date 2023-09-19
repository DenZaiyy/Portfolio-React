import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha"
import AOS from "aos";
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';

const Contact = () => {
	const captchaSiteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;
	const captchaSecretKey = import.meta.env.VITE_CAPTCHA_SECRET_KEY;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

	useEffect(() => {
		AOS.init({disable: 'mobile'});
	}, [])


	const alertTypes = {
		success: {
			bg     : 'bg-green-700',
			icon   : 'fas fa-check-circle',
			content: 'Success',

		},
		error  : {
			bg     : 'bg-red-700',
			icon   : 'fas fa-times-circle',
			content: 'Error',
		},
		default: {
			bg     : '',
			icon   : '',
			content: '',
		}
	}

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const [btnName, setBtnName] = useState('Send')
	const [btnColor, setBtnColor] = useState('blue')
	const [displayAlert, setDisplayAlert] = useState('hidden')
	const [alertType, setAlertType] = useState(alertTypes.default)

	const form = useRef(null);
	const captchaRef = useRef(null)

	const handleSubmit = async e => {
		e.preventDefault();

		if(name && email && message){
			let token = captchaRef.current.getValue();
			if(token){
				let valid_token = await verifyToken(token);
				if(valid_token.success){
					const serviceID = "service_2mwguwe";
					const templateID = "template_fuqhrzf";

					emailjs.init(publicKey);

					setBtnName('Sending...')
					setBtnColor('yellow')

					e.preventDefault()

					emailjs.sendForm(serviceID, templateID, form.current, publicKey, captchaSecretKey)
						.then(() => {
							form.current.reset()
							handleAlert('success', true, 'Le message a bien été envoyé')

						})
						.catch((e) => {
							console.log(e)
							handleAlert('error', true, 'Une erreur est survenue, veuillez réessayer plus tard')
						})
				}else{
					handleAlert('error', false, 'Captcha invalide')
				}
			}else{
				handleAlert('error', false, 'Veuillez valider le captcha')
			}
		}else{
			handleAlert('error', false, 'Tous les champs sont obligatoires')
		}
	}

	function handleAlert(type, mail, content) {
		if (type === "success" && mail && content) {
			setAlertType(alertTypes.success)
			alertTypes.success.content = content
			setDisplayAlert('block')
			setBtnName('Email send')
			setBtnColor('green')
		}

		if (type === "error" && mail && content) {
			setAlertType(alertTypes.error)
			alertTypes.error.content = content
			setDisplayAlert('block')
			setBtnName('Email not send')
			setBtnColor('red')
		}

		if (type === "error" && !mail && content) {
			setAlertType(alertTypes.error)
			alertTypes.error.content = content
			setDisplayAlert('block')
		}

		setTimeout(() => {
			if(mail) {
				setBtnName('Send')
				setBtnColor('blue')
			}
			setDisplayAlert('hidden')
		}, 3000)
	}

	const verifyToken = async (token) => {
		try{
			let response = await axios.post(`http://localhost:4000/verify-token`,{

				secret: captchaSecretKey,
				token
			});
			return response.data;
		}catch(error){
			console.log("error ",error);
		}
	}

	return (
		<section name='contact' className={`section flex-center p-4`}>
			<form ref={form} onSubmit={handleSubmit} method={'POST'} className={`flex flex-col max-w-[600px] w-full`}>
				<div className={`pb-8`}>
					<p className={`text-4xl font-bold inline border-b-4 border-[#f44b3a] text-gray-300`} data-aos="fade-right" data-aos-easing="ease-in-sine">Contact</p>
					<p className={`text-gray-300 py-4`} data-aos="fade-up" data-aos-duration="1500">// Submit the form below or shoot me an <a href="mailto:grischko.kevin@gmail.com">email</a></p>
				</div>
				<div className="alerts">
					<div className={`alert w-full ${displayAlert} p-5 rounded mb-5 ${alertType.bg}`}><i className={alertType.icon}/> - {alertType.content}</div>
				</div>

				<input className={`bg-[#ccd6f6] p-2`} type="text" placeholder='Name' name='name' onChange={e => setName(e.target.value)} required/>
				<input className={`my-4 p-2 bg-[#ccd6f6]`} type="email" placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} required/>
				<textarea className={`bg-[#ccd6f6] p-2 mb-5`} name="message" rows="10" placeholder={`Message`} onChange={e => setMessage(e.target.value)} required></textarea>

				<div className="flex justify-center">
					<ReCAPTCHA sitekey={captchaSiteKey} ref={captchaRef} theme={'dark'} />
				</div>
				<button type="submit" className={`btn btn-center btn-${btnColor}`}>{btnName}</button>
			</form>
		</section>
	);
};

export default Contact;
