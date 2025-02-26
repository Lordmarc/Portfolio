

const IconCard = ( {icon}: {icon: ReactElement} ) => {
  return (
    <div className='group cursor-pointer flex items-center justify-center border rounded-md shadow-lg bg-white transition duration-300  p-2'>
      {icon}
    </div>
  )
}

export default IconCard