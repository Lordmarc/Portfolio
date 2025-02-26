
import MyPicture from '../../assets/happy-me.png';

const ImageCard = () => {
  return (
    <div className='h-64 md:h-96 md:w-96  rounded-full overflow-hidden'>
      <img src={MyPicture} alt="" className='h-full w-full' />
    </div>
  )
}

export default ImageCard