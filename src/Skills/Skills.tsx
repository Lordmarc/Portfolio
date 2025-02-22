import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < level) {
        start++;
        setCount(start);
      } else {
        clearInterval(interval);
      }
    }, 20); // Speed of counting animation

    return () => clearInterval(interval);
  }, [level]);

  return (
    <div className="my-3">
      <h3 className="text-[#D8E9A8]">{skill}</h3>
      <div className="w-full bg-gray-700 h-4 rounded-md overflow-hidden">
        <motion.div
          className="h-full bg-[#4E9F3D]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <p className="text-[#D8E9A8]">{count}%</p>
    </div>
  );
};

const skills = [
  { name: "HTML", level: 70 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "React.js", level: 60 },
  { name: "Tailwind CSS", level: 85 },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-[#1E5128] p-6"
      
      viewport={{ once: true }}
    >
      <h2 className="text-4xl text-[#D8E9A8] font-bold text-center mb-6">
        My Skills
      </h2>

      <div className="max-w-md mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <SkillBar skill={skill.name} level={skill.level} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
