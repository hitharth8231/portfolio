import { personalInfo } from "../data/personalInfo";
import pythonLogo from "../assets/python.png";
import fastapiLogo from "../assets/fastapi.png";

const Hero = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-peach to-beige text-charcoal">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-softBrown">
        Hi, I'm Hitharth
      </h1>

      <p className="text-xl sm:text-2xl mt-2 text-softOrange">
        Machine Learning | Data Science | Feature Engineering 
      </p>

      <p className="mt-4 max-w-xl text-fadedGray">
        I build data-driven applications and deploy smart ML models that learn, adapt, and deliver practical results.
      </p>

      <div className="mt-6 flex gap-6 justify-center items-center">
        <img src={pythonLogo} alt="Python" className="h-10" />
        <img src={fastapiLogo} alt="FastAPI" className="h-10" />
      </div>

      <div className="mt-6 space-x-4">
        <a
          href={personalInfo.github}
          className="bg-softOrange px-4 py-2 rounded text-white hover:bg-orange-400"
        >
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          className="bg-softPurple px-4 py-2 rounded text-white hover:bg-purple-600"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Hero;
