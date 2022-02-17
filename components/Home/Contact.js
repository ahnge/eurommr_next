import { Location, Mail, User } from "../icons/icons";

const Contact = () => {
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
    });
    console.log(formData);
  };
  return (
    <div className=" py-16 bg-lb1 dark:bg-db1 transition">
      <div className=" pl-7 py-2 lg:py-4 lgr:py-6 border-l-[12px] border-yellow-400">
        <h3 className=" font-semibold text-2xl sm:text-[1.75rem] lgr:text-[2.44rem] text-text_wm dark:text-text_dm">
          Contact US
        </h3>
      </div>
      <div className="flex flex-col px-8 mt-8 xl:px-20 lgr:px-32 xlr:px-40 sm:flex-row items-center">
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
          <form className=" space-y-4" onSubmit={handleSubmit}>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
