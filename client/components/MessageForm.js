import { useState, useReducer } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'email':
      return { ...state, email: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

export default function MessageForm() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === '' || email === '' || message === '') {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    };

    setFormSubmitted({ title: 'Sending message...', paragraph: '' });
    emailjs.send(
      process.env.EMAIL_JS_SERVICE,
      process.env.EMAIL_JS_TEMPLATE,
      params,
      process.env.EMAIL_JS_USER,
    )
      .then(({ status }) => {
        if (status === 200) {
          setFormSubmitted({ title: 'Message has been sent', paragraph: 'Mike will be in contact with you soon.' });
        } else {
          setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Mike either by phone or email.' });
        }
      }, (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Mike either by phone or email.' });
      });
  };

  return formSubmitted.title === '' ? (
    <div className=''>
      <h3 className=" text-lato text-2xl font-light text-zinc-900 lg:pt-6 lg:text-3xl lg:ml-6">Enviar mensaje</h3>
      {!showCaptcha ? (
        <form onSubmit={submitFormAndShowCaptcha} >
          <div className="flex font-open-sans justify-center flex-row sm:flex-row ">
            <div className="sm:mr-4 w-auto sm:w-1/2  flex flex-col items-end md:w-full md:m-6">
              <label className="block text-gray-500 font-bold my-2 w-full" htmlFor="contact-form-name">
                Name:
                <input
                  id="contact-form-name"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  type="text"
                  value={name}
                  onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                  required
                />
              </label>
              <label className="block text-gray-500 font-bold my-2 w-full" htmlFor="contact-form-email">
                Email:
                <input
                  id="contact-form-email"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  type="email"
                  value={email}
                  onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                  required
                />
              </label>
              <label className="block text-gray-500 font-bold my-2 w-full" htmlFor="contact-form-message">
                Mensaje:
                <textarea
                  rows="5"
                  id="contact-form-message"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  type="text"
                  value={message}
                  onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                  required
                />
              </label>
              <div className=" pb-6 w-full flex justify-end items-center flex-col sm:flex-row md:justify-start">
                {showFormErr ? <p className="sm:mr-4 text-red-400">Please fill in all three input boxes to send a message</p> : null}
                <button className="bg-zinc-800 text-white py-2 px-4 mt-6 sm:mr-4 rounded focus:outline-none focus:shadow-outline w-full md:w-1/4 lg:w-1/5 " type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </div>

        </form>
      ) : (
        <ReCAPTCHA
          sitekey={process.env.CAPTCHA_SITE_KEY}
          onChange={sendEmail}
        />
      )}
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">{formSubmitted.title}</h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
}