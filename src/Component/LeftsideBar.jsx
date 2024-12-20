import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import profileImg from "/src/asset/profile.jpg";
const LeftsideBar = () => {
  return (
    <div className="w-72  flex   bg-white items-center  justify-center flex-col">
      <div className="w-52 h-72 mt-12  gap-3  flex flex-col  items-center text-center">
        <img
          className="w-40 h-40 rounded-2xl"
          src={profileImg}
          alt="profile-img"
        ></img>
        <h4 className="w-auto  font-medium size-4 leading-5 text-[#2B2B2B]">
          Krishna kumar
        </h4>
        <p className=" w-auto   font-medium size-4 leading-5 text-[#767676]">
          Front-end Developer
        </p>
        {/*  icons div */}
        <div className="  w-52 flex justify-between m-auto">
          <div className="w-7 h-7 rounded-full bg-yellow-300 flex justify-center items-center ">
            <FaLinkedinIn />
          </div>
          <div className="w-7 h-7 rounded-full bg-yellow-300 flex justify-center items-center ">
            <FaGithub />
          </div>
          <div className="w-7 h-7 rounded-full bg-yellow-300 flex justify-center items-center ">
            <SiGmail />
          </div>
          <div className="w-7 h-7 rounded-full bg-yellow-300 flex justify-center items-center ">
            <FaTwitter />
          </div>
        </div>
        <hr className="w-56 border-2  border-color-[#F0F0F6]"></hr>
      </div>

      
      {/* skills */}

      <div className="mt-5 w-56 mb-5 ">
        <h4 className="size-5 leading-5 w-auto font-medium text-[#2B2B2B]">
          Skill
        </h4>

        <div className="flex flex-col justify-between mt-5 w-auto">
          <div className="flex justify-between mb-1   text-gray-600">
            <h4 className="size-5 leading-5 w-auto font-medium ">
              React js
            </h4>
            <span>70%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={70}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          ></input>
        </div>

        <div className="flex flex-col justify-between mt-2 w-auto">
          <div className="flex justify-between mb-1  text-gray-600">
            <h4 className="size-5 leading-5 w-auto font-medium ">
              Javascript
            </h4>
            <span>80%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          ></input>
        </div>
        <div className="flex flex-col justify-between mt-2 w-auto">
          <div className="flex justify-between mb-1  text-gray-600">
            <h4 className="size-5 leading-5 w-auto font-medium ">
              Html
            </h4>
            <span>80%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          ></input>
        </div>
        <div className="flex flex-col justify-between mt-2 w-auto">
          <div className="flex justify-between mb-1 text-gray-600">
            <h4 className="size-5 leading-5 w-auto font-medium  ">
              CSS
            </h4>
            <span>85%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={85}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          ></input>
        </div>
        <div className="flex flex-col justify-between mt-2 w-auto">
          <div className="flex justify-between mb-1 text-gray-600">
            <h4 className="size-5 leading-5 w-auto font-medium  ">
              Figma
            </h4>
            <span>90%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={90}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          ></input>
        </div>
        <div className="flex flex-col justify-between mt-2 w-auto">
          <div className="flex justify-between mb-1 text-gray-600 ">
            <h4 className="size-5 leading-5 w-auto font-medium  ">
              Bootstrape
            </h4>
            <span>80%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          ></input>
        </div>
        <div className="flex flex-col justify-between mt-2 w-auto">
          <div className="flex justify-between mb-1  text-gray-600">
            <h4 className="size-5 leading-5 w-auto font-medium ">
              Node js
            </h4>
            <span>80%</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default LeftsideBar;
