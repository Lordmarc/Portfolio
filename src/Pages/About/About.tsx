import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import IconCard from "../../Components/Cards/IconCard";
import ImageCard from "../../Components/Cards/ImageCard";

const About = () => {
  const icons = [
    { component: FaHtml5, hoverColor: "group-hover:text-orange-600" },
    { component: FaCss3Alt, hoverColor: "group-hover:text-blue-600" },
    { component: FaReact, hoverColor: "group-hover:text-cyan-600" },
    { component: FaGitAlt, hoverColor: "group-hover:text-red-600" },
    { component: IoLogoJavascript, hoverColor: "group-hover:text-yellow-600" },
    { component: RiTailwindCssFill, hoverColor: "group-hover:text-teal-600" },
  ];

  const intro = [
    "I started my journey in web development during my college years, where I discovered my passion for creating seamless and engaging user experiences. From building my first Hello World webpage to working on real projects, I have constantly been learning and improving.",
    "I'm also the type of person who, when I don't understand something, especially when it comes to coding, I will research it or look for resources that can help me understand it better."
  ];
    

  return (

      <div className="flex justify-center  items-center flex-col-reverse md:flex-row gap-10">
        <div className="flex-1">
          {/*Left Page*/}
          {intro.map((item, index) => (
            <p className="mt-2 text-justify md:text-left" key={index}>{item}</p>
          ))}
          <div className="border rounded-lg mt-4 p-3 flex-col md:max-w-max">
            <p className="font-bold">Tools & Technologies</p>
            <div className="flex flex-wrap gap-3 mt-5">
            {icons.map(({ component: Icon, hoverColor }, index) => (
              <IconCard
                key={index}
                icon={<Icon className={`w-10 h-10  ${hoverColor}`} />}
              />
            ))}
            </div>
          
          </div>
         
        </div>
         {/*Right Page*/}
         <div className="flex-1 flex justify-center items-center">
            <ImageCard />
          </div>
      </div>

  );
};

export default About;
