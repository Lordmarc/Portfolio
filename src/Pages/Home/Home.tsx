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
    <div className="">
      <Navbar />

      <div className="container mx-auto  lg:max-w-7xl lg:mx-4">
        <div className="flex flex-col-reverse md:flex-row justify-between md:gap-4  mt-20 md:mt-40">
          <div className="flex-1 text-center md:text-left md:flex md:flex-col md:justify-end">
            <h2 className="font-medium text-xl md:text-2xl">Hello, I'am LORDMARC</h2>
            <p className="text-sm md:text-base">Aspiring Web Developer {introduction}</p>
            <div className='flex justify-center mt-3 md:hidden'>
            <Download fileUrl={Resume} fileName="My_Resume.pdf"/>
            </div>

          </div>

          <div className="flex-1 flex justify-center">
            <ImageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
