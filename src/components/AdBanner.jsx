import jacket from '../assets/jacket.png'

const AdBanner = () => {
  return (
    <div className='top-ad-banner mt-[14.6rem] md:mt-6 w-full text-white bg-brownish/70 
    flex px-4 md:px-32 justify-center py-8  '>
      <div className="left-section flex flex-col justify-center">
        <h2 className="title text-2xl md:text-5xl font-bold tracking-normal md:tracking-wider">
          NEW SEASON ARRIVALS
        </h2>
        <p className="ad-description my-3 text-xs  md:text-xl tracking-normal md:tracking-wide leading-6 md:leading-8">
          CHECK OUT ALL THE TRENDS
        </p>
      </div>

      <div className="right-">
        <img src={jacket} alt="" />
      </div>
    </div>
  )
}

export default AdBanner