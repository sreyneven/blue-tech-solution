import Send_Icon from "./icons/send-icon";
const Form_Contact_Us = () => {
  return (
    <form className="text-start bg-[#FFFFFF] p-10 rounded-[6px] mx-auto">
      <h1 className="text-[1.3rem] my-4 mb-8 text-[#292D33] font-[400]">
        Send us a message
      </h1>
      <div className="relative z-0  w-full group">
        <label htmlFor="name" className="text-md text-gray-500 dark:text-gray-400 duration-300  text-[0.85rem]"  >
          Name
        </label>
        <input type="text" id="name" name="name"  className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
      </div>
      <div className="relative z-0 my-4 w-full group">
        <label htmlFor="email"  className="text-md text-gray-500 dark:text-gray-400 duration-300  text-[0.85rem]" >
          Email
        </label>
        <input type="text" id="email" name="email" className="py-2 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      </div>
      <div className="relative z-0 my-4 w-full group">
        <label htmlFor="subject" className="text-md text-gray-500 dark:text-gray-400 duration-300  text-[0.85rem]" >
          Subject
        </label>
        <input type="text" id="subject" className="py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      </div>
      <div className="relative z-0 my-4 w-full group">
        <label htmlFor="message" className="text-md text-gray-500 dark:text-gray-400 duration-300  text-[0.85rem]" >
          Message
        </label>
        <input type="text" id="message" name="message" className=" py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required  />
      </div>
      <div className="pb-24">
        <button  type="button" className="text-white focus:outline-none bg-[#4169E1] hover:bg-[#467DFF] rounded-[6px] text-[0.8rem] px-5 py-2.5 text-center inline-flex items-center my-7 font-manrope font-[500] float-right " >
          Send
          <Send_Icon />
        </button>
      </div>
    </form>
  );
};

export default Form_Contact_Us;
