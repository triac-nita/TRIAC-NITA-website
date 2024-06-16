import React from "react";
import { Link } from "react-router-dom";
import './Contact.css'
import { motion } from "framer-motion";
import Constant from "../../data/Constant";
const Contact = ({id}) => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact bg-slate-900 w-full min-h-screen" id='contact-us'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="font-semibold text-4xl md:text-5xl mb-5 text-center">Contact Us !</p>
                    <p className=' text-lg text-center text-gray-500 leading-6'>Have something to discuss</p>
                </motion.div>
                <div className="contact-box grid grid-cols-2 gap-2 mt-10">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading text-lg">
                            <p>{Constant.ContactUsPara}</p>
                        </div>
                        <div className="contact-hello">
                            <p>Say Hello</p>
                            {/* <Link className='hello-links' to="//wa.me/+917004151046" target='_blank'>wa.me/ankitkumar</Link> */}
                            <a className='hello-links' href="mailto:triac.nita@gmail.com" target='_blank'>triac.nita@gmail.com</a>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form
                            name="contact-form"
                            method="POST"
                            data-netlify="true"
                            action="POST"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label htmlFor="name">Your Name</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                className="text-base"
                                placeholder="John Doe"
                                required
                                />
                            </div>

                            <div className="email ">
                                <label htmlFor="email">Your Email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                className="text-base"
                                placeholder="Johndoe@gmail.com"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">Your message</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                className="text-base"
                                placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                                Send Message
                            </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
