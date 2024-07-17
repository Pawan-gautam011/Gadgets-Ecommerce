import React from 'react'
import Slider from "react-slick";

import Image1 from "../../assets/category/p-10.png"
import Image2 from "../../assets/hero/headphone.png"
import Image3 from "../../assets/category/macbook.png"
import Button from '../Shared/Button';


const Hero = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase:'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus:true,
      };

    const HeroData = [
        {
            id:1,
            image:Image1,
            subtitle:"Beats Solo",
            title:"Wireless",
            title2:"Earpods",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi eligendi labore ab illum magnam optio aut, velit eum doloribus.",
        },
        {
            id:2,
            image:Image2,
            subtitle:"Beats Studio",
            title:"Wireless",
            title2:"Headphone",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi eligendi labore ab illum magnam optio aut, velit eum doloribus.",
        },
        {
            id:3,
            image:Image3,
            subtitle:"Beats X",
            title:"Wireless",
            title2:"Earbuds",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi eligendi labore ab illum magnam optio aut, velit eum doloribus.",

        }
    ]

  return (
    <div className='container p-20'>
        <div className=' rounded-3xl min-h-[550px]
        sm:min-h-[250px]  flex justify-center items-center  hero-bg-color '>
            <div className='container pb-8 sm:pb-0'>
            {/* Hero Section */}
            {/* Slider from React Slick  */}
            <Slider {...settings} >
                {
                    HeroData.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* Textarea in images */}
                            <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                            sm:text-left order-2 sm:order-1 relative z-10
                            '> 
                             <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.subtitle}</h1>
                             <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                             <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                             <div>
                                <Button 
                                text="Shop Now"
                                bgColor="bg-primary"
                                textColor="text-white"
                                />
                             </div>

                            </div>
                            {/* image part */}
                            <div className='order-1 sm:order-2'>
                                <div>
                                    <img src={data.image} alt="" 
                                    className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px rgba(0,0,0,.4)] relative z-40 p-2  '
                                    />
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
 
                }
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero