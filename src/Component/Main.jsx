const Main = () => {
  return (
    // main div
    <div className="w-[970px] h-[470px] bg-white">
      {/* name div */}
      <div className="flex flex-col w-[500px] mt-20 ml-14 ">
        <div className="font-inter text-4xl font-bold leading-snug">
          <h1>
            Hello, I’m Krishna Kumar...<br></br>
            <span className="text-yellow-400">Front-end</span> Developer
          </h1>
        </div>
        {/* about me section  */}
        <div className="mt-4 text-base font-inter font-medium leading-7 text-gray-500">
          <h6>
          I build responsive, high-performance applications using React.js, focusing on UI/UX design. Passionate about continuous learning, I stay updated with the latest web development trends.
          </h6>
        </div>
        <div>
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
