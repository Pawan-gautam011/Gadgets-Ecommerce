import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"


const BlogData = [
  {
    title:"How to choose perfect smartwatch",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. to choose perfect smartwatc",
    published:"Jan 20, 2024 by Pawan G",
    image:Img1,
  },

  {
    title:"How to choose perfect gadget",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    published:"Jan 15, 2024 by Prabin G",
    image:Img2,
  },

  {
    title:"How to choose perfect VR headset",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    published:"Jan 10, 2024 by Anup G",
    image:Img3,
  }

]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
                    {/* Heading Section */}
            <Heading 
            title='Recent News'
            subtitle={"Explore our Blogs"}
            />
            {/* Blogs Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
              {
                BlogData.map((data)=>(
                  <div key={data.title} className='bg-white dark:bg-gray-900'> 
                      {/* image */}
                      <div className='overflow-hidden rounded-2xl mb-2'>
                      <img src={data.image} alt={data.title} className='w-full h-[220px] object-cover rounded-2xl hover:Scale-105 duration-500'/>
                      </div>
                      <div className='space-y-2'>
                        {/* content Section */}
                        <p className='text-xs text-gray-500'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>


                      </div>

                  </div>
                ))
              }
              </div>        
      </div>
    </div>
  )
}

export default Blogs