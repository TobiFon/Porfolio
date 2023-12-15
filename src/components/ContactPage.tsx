import React from "react";
import { Mail, PhoneCallIcon } from "lucide-react";
import { ContactForm } from "./ContactForm";

const ContactPage = () => {
  return (
    <section className=" min-h-[75vh] flex flex-col justify-center w-full items-center space-y-8 max-lg:mb-20">
      <div className=" w-full">
        <h2 className="scroll-m-20 text-primary pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Get in touch{" "}
        </h2>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactPage;
