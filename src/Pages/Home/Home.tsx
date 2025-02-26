import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import ImageCard from "../../Components/Cards/ImageCard";
import Download from "../../Components/Download/Download";
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
   
      
      <div className="container min-h-[calc(100vh-12rem)] flex justify-center items-center mx-auto lg:max-w-7xl lg:px-20">
       
          <div className="flex-col text-center  md:text-center md:flex md:justify-center md:items-center">
            <h2 className="font-bold text-2xl md:text-4xl">
              HEY, I'M LORDMARC MATABANG
            </h2>
            <p className="text-sm text-slate-500 md:text-xl md:mt-3">
              Aspiring  {introduction}
            </p>
            <div className="flex gap-2 justify-center mt-2 md:justify-center">
           
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

          
        </div>

  
  );
};

export default Home;
