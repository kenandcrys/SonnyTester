import facebook from "../../assets/ICONS/socials/facebook.svg";
import twitter from "../../assets/ICONS/socials/twitter.svg";
import linkedin from "../../assets/ICONS/socials/linkedin.svg";
import instagram from "../../assets/ICONS/socials/instagram.svg";

const LoginPage = () => {
  const socialMedia = [facebook, instagram, linkedin, twitter];

  return (
    <div className="flex flex-col items-center mb-8 font-['Roboto'] ">
      <div className="flex flex-col gap-4 p-4 text-center">
      </div>
      <div className="flex flex-col max-w-[704px] w-full border-[0.5px] border-[#938F96] p-10">
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="p-3 px-5 border-[0.5px] border-[#938F96] rounded-md"
            />
          </div>

          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <span>Stay signed in</span>
          </div>

          <button
            type="submit"
            className="bg-[#EEC643] px-8 py-4 max-w-[704px] w-full mx-auto mt-8 rounded-md"
          >
            Log in
          </button>
        </form>

        <div className="py-8 text-center">
          Dont have an account?{" "}
          <a href="/signup" className="p-2 underline">
            Sign up
          </a>
        </div>

        <div>
          <div className="flex items-center">
            <div className="flex-1 h-px bg-[#938F96]"></div>
            <div className="mx-4 text-sm font-['Roboto']">or continue with</div>
            <div className="flex-1 h-px bg-[#938F96]"></div>
          </div>
          <div className="flex justify-center py-10 gap-9">
            {socialMedia.map((media,i)=>{
              return <img key={i} src={media}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
