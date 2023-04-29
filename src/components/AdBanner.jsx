import jacket from '../assets/jacket.png'

const AdBanner = () => {
  return (
    <div className='top-ad-banner mt-6 w-full text-white bg-brownish/70 flex px-32 justify-center py-8'>
      <div className="left-section flex flex-col justify-center">
        <h2 className="title text-5xl font-bold tracking-wider">
          NEW SEASON ARRIVALS
        </h2>
        <p className="ad-description my-3 text-xl tracking-wide leading-8">
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