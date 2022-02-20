import { Location, Mail, User } from "../icons/icons";
import { useState, useEffect } from "react";
import { useGlobalcontext } from "../context";

const Contact = () => {
  const [emailHasSent, setEmailHasSent] = useState(false);
  const { contactRef } = useGlobalcontext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
      field.value = "";
    });

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    }).then(() => {
      setEmailHasSent(true);
      setTimeout(() => {
        setEmailHasSent(false);
      }, 3000);
    });
  };

  return (
    <div className=" py-[70px] bg-lb1 dark:bg-db1 transition" ref={contactRef}>
      <div className=" pl-7 py-2 md:pl-12 lg:py-4 lgr:py-6 border-l-[12px] border-yellow-400">
        <h3 className=" font-semibold text-2xl sm:text-[1.75rem] lgr:text-[2.44rem] text-text_wm dark:text-text_dm">
          Contact US
        </h3>
      </div>
      <div className="flex flex-col px-8 md:px-14 mt-[70px] xl:px-20 lgr:px-32 xlr:px-40 sm:flex-row items-center">
        <div className="flex-1 px-6 space-y-3 xlr:space-y-5">
          <div className="flex items-center justify-start space-x-6 text-text_wm dark:text-text_dm">
            <User />
            <p className=" text-sm sm:text-lg xl:text-xl xlr:text-2xl font-normal">
              +95 9 123 456 789
            </p>
          </div>
          <div className="flex items-center justify-start space-x-6 text-text_wm dark:text-text_dm">
            <Location />
            <p className=" text-sm sm:text-lg xl:text-xl xlr:text-2xl font-normal">
              Br YatKwat, Taunggyi
            </p>
          </div>
          <div className="flex items-center justify-start space-x-6 text-text_wm dark:text-text_dm">
            <Mail />
            <p className=" text-sm sm:text-lg xl:text-xl xlr:text-2xl font-normal">
              eurommr@gmail.com
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10">
          <form className=" space-y-4 relative" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              className=" bg-lb2 text-text_wm dark:text-text_dm text-sm sm:text-base xlr:text-lg font-light shadow-inner dark:bg-db2 focus:outline outline-2 outline-yellow-400 w-full rounded-lg px-4 py-2"
              placeholder="Name"
              required
            />
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className=" bg-lb2 text-text_wm dark:text-text_dm text-sm sm:text-base xlr:text-lg font-light shadow-inner dark:bg-db2 focus:outline outline-2 outline-yellow-400 w-full rounded-lg px-4 py-2"
              placeholder="Phone number"
              required
            />
            <textarea
              name="message"
              id="message"
              className=" bg-lb2 text-text_wm dark:text-text_dm text-sm sm:text-base xlr:text-lg font-light shadow-inner dark:bg-db2 focus:outline outline-2 outline-yellow-400 w-full rounded-lg px-4 py-2"
              placeholder="Message"
              rows={4}
              required
            />
            <button
              type="submit"
              className=" px-6 py-2 bg-yellow-400 rounded-md capitalize shadow-md text-black border-2 border-yellow-400 hover:border-black dark:border-yellow-400 hover:bg-db1 hover:text-white transition"
            >
              Submit
            </button>
            <p
              className={`text-sm text-text_wm dark:text-text_dm px-3 py-1 bg-green-300 rounded-md w-fit absolute bottom-2 right-0 dark:bg-green-500 ${
                emailHasSent ? "block" : "hidden"
              }`}
            >
              Success! We will reach you ASAP.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
