import { FaLinkedinIn, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import profileImg from '/src/asset/profile.jpg';
import Tooltip from '@mui/material/Tooltip';

const LeftsideBar = () => {
  return (
    <div className="w-72 flex bg-white items-center justify-center flex-col">
      <div className="w-52 h-72 mt-12 gap-3 flex flex-col items-center text-center">
        <img
          className="w-40 h-40 rounded-md"
          src={profileImg}
          alt="Profile of Krishna Kumar, Front-end Developer"
        />
        <h4 className="font-medium text-[#2B2B2B]">Krishna Kumar</h4>
        <p className="font-medium text-[#767676]">Front-end Developer</p>
        
        {/* Icons Div */}
        <div className="w-52 flex justify-between  text-gray-700 m-auto">
          <Tooltip title="LinkedIn" placement="bottom" arrow>
            <a
              href="https://www.linkedin.com/in/krishna-kumar-0a415a25a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-yellow-300 flex cursor-pointer justify-center items-center"
            >
              <FaLinkedinIn />
            </a>
          </Tooltip>

          <Tooltip title="GitHub" placement="bottom" arrow>
            <a
              href="https://github.com/krishna1703"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-7 h-7 rounded-full  bg-yellow-300 flex cursor-pointer justify-center items-center"
            >
              <FaGithub />
            </a>
          </Tooltip>

          <Tooltip title="YouTube" placement="bottom" arrow>
            <a
              href="https://www.youtube.com/@TheKrishna17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-yellow-300 flex cursor-pointer justify-center items-center"
            >
              <FaYoutube />
            </a>
          </Tooltip>

          <Tooltip title="Twitter" placement="bottom" arrow>
            <a
              href="https://x.com/krishna76078"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-7 h-7 rounded-full bg-yellow-300 flex cursor-pointer justify-center items-center"
            >
              <FaTwitter />
            </a>
          </Tooltip>
        </div>

        <hr className="w-56 border-2 border-[#F0F0F6]" />
      </div>

      {/* Skills Section */}
      <div className="mt-5 w-56 mb-5">
        <h4 className="font-medium text-[#2B2B2B]">Skills</h4>

        <div className="flex flex-col justify-between mt-5">
          <div className="flex justify-between mb-1 text-gray-600">
            <h4 className="font-medium">React.js</h4>
            <span>80%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          />

          <div className="flex justify-between mb-1 text-gray-600 mt-2">
            <h4 className="font-medium">JavaScript</h4>
            <span>80%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          />

          <div className="flex justify-between mb-1 text-gray-600 mt-2">
            <h4 className="font-medium">HTML</h4>
            <span>80%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          />

          <div className="flex justify-between mb-1 text-gray-600 mt-2">
            <h4 className="font-medium">CSS</h4>
            <span>85%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={85}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          />

          <div className="flex justify-between mb-1 text-gray-600 mt-2">
            <h4 className="font-medium">Figma</h4>
            <span>90%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={90}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          />

          <div className="flex justify-between mb-1 text-gray-600 mt-2">
            <h4 className="font-medium">Bootstrap</h4>
            <span>80%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          />

          <div className="flex justify-between mb-1 text-gray-600 mt-2">
            <h4 className="font-medium">Node.js</h4>
            <span>80%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={80}
            className="w-full mt-1 h-1 bg-yellow-400 rounded-md appearance-none cursor-pointer accent-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftsideBar;
