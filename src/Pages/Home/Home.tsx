import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import ImageCard from "../../Components/Cards/ImageCard";
import Download from "../../Components/Download/Download";
import Navbar from "../../Components/Navbar/Navbar";
import Resume from "../../assets/Resumee.pdf";

const Home = () => {
  const introduction = `Front-End Developer passionate
                        about crafting interactive and
                        user-friendly web experiences.
                        I enjoy working with technologies
                        like HTML, CSS, JavaScript, and React.js
                        to build responsive and visually appealing
                        applications.`;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto lg:max-w-7xl lg:px-20">
        <div className="flex flex-col-reverse md:flex-row justify-between md:gap-4 mt-20 md:mt-40">
          <div className="flex-1 text-center md:text-left md:flex md:flex-col md:justify-end">
            <h2 className="font-medium text-xl md:text-2xl">
              Hello, I am LORDMARC
            </h2>
            <p className="text-sm md:text-base">
              Aspiring Web Developer {introduction}
            </p>
            <div className="flex gap-2 justify-center mt-2 md:justify-start">
           
              <a
                href="https://www.facebook.com/lordmarc.siega.matabang.2024"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-10 w-10 opacity-0 animate-fadeIn duration-300 flex items-center justify-center"
                style={{ animationDelay: "0.5s" }}
              >
                <FaFacebookSquare className="icons transition-transform group-hover:scale-110 duration-300" />
              </a>

         
              <a
                href="https://www.linkedin.com/in/lord-marc-matabang-8859102b0"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-10 w-10 opacity-0 animate-fadeIn duration-300 flex items-center justify-center"
                style={{ animationDelay: "1.5s" }}
              >
                <FaLinkedin className="icons transition-transform group-hover:scale-110 duration-300" />
              </a>

            
              <a
                href="https://github.com/Lordmarc"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-10 w-10 opacity-0 animate-fadeIn duration-300 flex items-center justify-center"
                style={{ animationDelay: "2.5s" }}
              >
                <FaGithubSquare className="icons transition-transform group-hover:scale-110 duration-300" />
              </a>
            </div>
            <div className="flex justify-center mt-3 md:hidden">
              <Download fileUrl={Resume} fileName="My_Resume.pdf" />
            </div>

        
            
          </div>

          {/* Image Card */}
          <div className="flex-1 flex justify-center">
            <ImageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
