import React from 'react';
import { FaArrowDown } from "react-icons/fa";

const Download = ({ fileUrl, fileName }: {fileUrl:string, fileName: string}) => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <div className='flex btn-primary md:flex md:items-center md:gap-2 md:btn-primary'onClick={handleDownload}>
    <p>Resume/CV </p>
    <FaArrowDown className='h-4 w-4 animate-bounce'/>
    </div>
  )
}

export default Download