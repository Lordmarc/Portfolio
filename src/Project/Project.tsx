import { motion } from "motion/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {data, ProjectProps} from './ProjectData';

import "swiper/css";
import "swiper/css/pagination";

function Card({ data }: { data: ProjectProps }) {
  return (
    
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
    
      className="bg-[#D8E9A8]  flex flex-col items-center shadow-md shadow-[#4E9F3D] mb-12 rounded-lg max-w-xs h-auto overflow-hidden"
    >
      <img src={data.images} alt={data.title} />
      <h3 className="font-medium mb-2">{data.title}</h3>
      <p className="text-justify mx-2">
        {data.description}
      </p>
      <motion.a
        whileHover={{
          backgroundColor: "#1E5128",
        }}
        whileTap={{ backgroundColor: "#1E5128" }}
        className="p-2 bg-[#4E9F3D] text-[#D8E9A8] rounded-md my-2"
        href=""
      >
        View Project
      </motion.a>
    </motion.div>
  );
}

export default function Project() {
  return (
    <section id="project" className="bg-[#1E5128] px-4 pt-4">
      <div>
        <h1 className="font-bold text-4xl text-[#D8E9A8] text-center my-5">
          Project Showcase
        </h1>
        
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          
          
          navigation
          pagination={{ clickable: true, type: 'bullets'}}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("Slide Change")}
          breakpoints={{
            320: {slidesPerView: 1, spaceBetween: 5},
            640: {slidesPerView: 2, spaceBetween: 50},
            768: {slidesPerView: 3, spaceBetween: 50},
            1024: {slidesPerView: 4, spaceBetween: 50}
          }}
        >
          {data.map(item => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <Card data={item}/>
            </SwiperSlide>
          ))}
       
        </Swiper>
     
        
      </div>
    </section>
  );
}
