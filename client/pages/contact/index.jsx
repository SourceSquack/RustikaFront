import React, { useReducer, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

import MapLocation from "@/components/MapLocation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "message":
      return { ...state, message: action.payload };
    default:
      throw new Error();
  }
}

const contact = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormError, setShowFormError] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });

  const submitFormAndShowCaptcha = (event) => {
    event.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === "" || email === "" || message === "") {
      setShowFormError(true);
      return;
    }

    const params = {
      ...formState,
      "g-recaptcha-response": captchaValue,
    };

    setFormSubmitted({
      title: "Enviando...",
      paragraph: "Por favor espere...",
    });
    emailjs
      .send(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        params,
        process.env.EMAIL_JS_USER
      )
      .then(({ status }) => {
        if (status === 200) {
          setFormSubmitted({
            title: "Mensaje enviado",
            paragraph:
              "Gracias por contactarnos, en breve nos comunicaremos con usted.",
          });
        } else {
          setFormSubmitted({
            title: "Error",
            paragraph: "Ha ocurrido un error, por favor intente de nuevo.",
          });
        }
      });
  };

  return formSubmitted.title === "" ? (
    <div className="bg-zinc-100">
      {!showCaptcha ? (
        <div>
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:justify-between xs:mt-20">
            <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full md:flex-shrink-0 p-10">
              <form
                onSubmit={submitFormAndShowCaptcha}
                className="lg:h-screen flex flex-col lg:justify-center mt-24"
              >
          <h1 className="text-3xl font-bold text-zinc-700">Contacto</h1>
                <label htmlFor="contact-form-name" name="name" className="">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) =>
                      dispatch({ type: "name", value: e.target.value })
                    }
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg my-2 w-full md:w-1/2"
                  />
                </label>
                <label htmlFor="contact-form-email" name="email">
                  <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    id="contact-form-email"
                    value={email}
                    onChange={(e) =>
                      dispatch({ type: "email", value: e.target.value })
                    }
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg my-2 w-full md:w-1/2"
                  />
                </label>
                <label htmlFor="contact-form-message" name="message">
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    value={message}
                    onChange={(e) =>
                      dispatch({ type: "message", value: e.target.value })
                    }
                    required
                    className="border-2 border-gray-300 p-2 rounded-lg my-2 w-full md:w-1/2 h-40"
                  />
                </label>
                <div className="w-full flex justify-end items-center flex-col sm:flex-row">
                  {showFormError ? (
                    <p className="sm:mr-4 text-red-400">
                      Please fill in all three input boxes to send a message
                    </p>
                  ) : null}
                </div>
                <input
                  type="submit"
                  value="Enviar"
                  className="bg-olive text-white p-2 rounded-lg my-2 w-full md:w-1/2"
                />
              </form>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 content-center md:pt-10 lg:pt-44">
              <MapLocation />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <ReCAPTCHA
          sitekey={process.env.RECAPTCHA_SITE_KEY}
          onChange={sendEmail}
        />
      )}
    </div>
  ) : (
    <div className="bg-zinc-800">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-40 lg:flex lg:flex-row lg:items-center">
          <div className="col-span-1 w-1/2 lg:flex-shrink-0">
            <div className="h-screen flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-amber-700">
                {formSubmitted.title}
              </h1>
              <p className="text-amber-700">{formSubmitted.paragraph}</p>
            </div>
          </div>
          <div className="col-span-1">
            <MapLocation />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
