import React from "react";
import { Mail, PhoneCallIcon } from "lucide-react";
import { ContactForm } from "./ContactForm";

const ContactPage = () => {
  return (
    <section className=" min-h-[85vh] flex flex-col justify-center w-full items-center space-y-8 max-lg:mb-20">
      <div className=" w-full">
        <h2 className="text-center text-5xl">Get in touch </h2>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;