import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidEmail(email)) {
      // Handle further actions like sending the email here
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setIsValid(true); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8">
      <div className="text-2xl font-normal leading-[120%] text-[#48464C] text-center">
        New to YORK SHOPPERS
      </div>
      <div className="text-xl font-[Roboto] font-normal leading-[120%] text-center">
        Subscribe to our newsletter to get updates on our latest offers
      </div>
      <div className="flex flex-col items-center gap-4 w-full md:w-[80%] lg:w-[60%] xl:w-[50%]">
        <div className="border border-solid border-[#3A92BE] rounded-md w-full md:w-[80%] flex">
          <input
            onChange={handleChange}
            value={email}
            type="email"
            id="email"
            placeholder="Email"
            className="flex-1 p-2"
          />
          <button type="submit" className="p-2 bg-[#09618E]">
            Subscribe
          </button>
        </div>
        {!isValid && (
          <p className="text-[#FF0000] text-sm">Please Enter Valid Email</p>
        )}
      </div>
    </form>
  );
};

export default SubscribeForm;
