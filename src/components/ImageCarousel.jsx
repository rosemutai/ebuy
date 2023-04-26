import { useEffect, useState } from 'react';

const ImageCarousel = () => {

  const [currentImage, setCurrentImage] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
       setCurrentImage(data);
    }

    getCategories();

  }, [])
  return (
    <div className=''>
      { currentImage.map((image, index) => (
        <img key={index} src={image.image}  className='w-full object-cover'/>
      )) }
    </div>
  )
}

export default ImageCarousel