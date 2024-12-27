import { FaArrowRight } from "react-icons/fa6";
import introImage from "/src/asset/profile.jpg"

const Main = () => {

  return (
    // main section
    <div className="w-[970px] h-[470px] flex  bg-white justify-evenly items-center ">
      {/* intro with name  section */}
      <div className="flex flex-col w-[500px]   gap-5">
      {/* intro section */}
        <div className="font-inter text-4xl font-bold leading-snug">
          <h1>
            Hello, I’m Krishna Kumar...<br></br>
            <span className="text-yellow-300">Front-end</span> Developer
          </h1>
        </div>
        {/* about me section  */}
        <div className=" text-base font-inter font-medium leading-7 text-gray-500">
          <h6>
          I build responsive, high-performance applications using React.js, focusing on UI/UX design. Passionate about continuous learning, I stay updated with the latest web development trends.
          </h6>
        </div>
        <div>
          <button className="mt-3 w-40 bg-yellow-400 p-3 text-xl font-semibold rounded-md  flex  justify-center items-center text-center gap-4">Hire Me  <FaArrowRight /></button>
        </div>
      </div>

      {/* profile img section */}

      <div>
      <img src={introImage} alt="profile-intro-image" className="w-64  rounded-lg"></img>
        
      </div>
    </div>
  );
};

export default Main;
