import { IoMdSearch } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";


const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: "/#",
    },
    {
        id: 2,
        name: 'Shop',
        link: "/shop",
    },
    {
        id: 3,
        name: 'About',
        link: "/about",
    },
    {
        id: 4,
        name: 'Blogs',
        link: "/#blogs",
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: 'Trending Products',
        link: "/#trending",
    },
    {
        id: 2,
        name: 'Best Selling',
        link: "/#best-selling",
    },
    {
        id: 3,
        name: 'Top Rated',
        link: "/#over hyped",
    },
]


const Navbar = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 nav'>
            <div className='py-4'>
                <div className="container flex justify-between items-center">

                    <div className='flex items-center gap-4'>
                        <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >GSHOP</a>

                        <div className='hidden lg:block'>
                            <ul className='flex items-centre gap-4'>
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                                className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                                            >{" "}  {data.name}</a>
                                        </li>
                                    ))
                                }
                                    {/* dropdown */}
                                <li className="relative cursor-pointer group">
                                    <a href="#" className="flex items-center gap-[2px]
                                    font-semibold text-gray-500 dark:hover:text-white ">Quick Links
                                    <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                    </span>
                                    
                                    </a>
                                   {/* dropdown links */}
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white ">
                                    <ul className="space-y-2">
                                        {
                                            DropdownLinks.map((data, index) =>(
                                                <li>
                                                    <a 
                                                    className="text-gray-500 w-full dark:hover:text-white duration-200 inline-block hover:bg-primary/20 rounded-md font-semibold "
                                                    href={data.link}>{data.name} </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            {/* Search bar section */}
                            <input type="text" placeholder='Search'
                                className='search-bar' />
                            <IoMdSearch
                                className='text-xl text-gray-600 
                                group-hover:text-primary absolute top-1/2 -translate-y-1/2 
                                    right-3 duration-200'
                            />
                        </div>


                        {/* Order Button */}

                        <button className='relative p-3'>
                            <FaShoppingCart
                                className='text-xl text-gray-600 dark:text-gray-400'
                            />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                4
                            </div>
                        </button>

                        <div>

                            {/* Dark mode */}

                            <DarkMode />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar