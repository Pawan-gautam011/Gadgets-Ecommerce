import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

import Img1 from "../../assets/product/p-1.jpg"

import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"
import Img5 from "../../assets/product/p-5.jpg"
import Img6 from "../../assets/product/p-9.jpg"
import Img7 from "../../assets/product/p-7.jpg"
import Img8 from "../../assets/product/p-10.png"


const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Boat Headphone",
        price: 150,
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price: 100,
        aosDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Googles",
        price: 220,
        aosDelay:"400",
    },
    {
        id:4,
        img:Img4,
        title:"Samsung Galaxy",
        price: 200,
        aosDelay:"600",
    },
    {
        id:5,
        img:Img5,
        title:"Samsung Galaxy",
        price: 200,
        aosDelay:"600",
    },
    {
        id:6,
        img:Img6,
        title:"Samsung Galaxy",
        price: 200,
        aosDelay:"600",
    },
    {
        id:6,
        img:Img7,
        title:"Redmi Galaxy",
        price: 330,
        aosDelay:"600",
    },
    {
        id:6,
        img:Img1,
        title:"Oppo",
        price: 200,
        aosDelay:"600",
    },


]

const Products = () => {
  return (
    <div>
        <div className='container'>
            {/* Heading Section */}
            <Heading title='Our Products'
            subtitle={"Explore our Products"}
            />
            {/* Body Section */}
            <ProductCard data = {ProductsData}/>
        </div>
    </div>
  )
}

export default Products