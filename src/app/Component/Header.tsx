'use client';
import React, { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font border-b">
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-serif font-bold">SHOP.CO</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8">
          <a href="#" className="text-base hover:text-gray-900">
          Shop <FaAngleDown className="inline ml-1" />

          </a>
          <a href="#" className="text-base hover:text-gray-900">
            OnSale
          </a>
          <a href="#" className="text-base hover:text-gray-900">
            Brands
          </a>
          <a href="#" className="text-base hover:text-gray-900">
          New Arrivals

          </a>
        </nav>

        {/* Search */}
        <div className="relative w-[350px]">
          <input
            type="text"
            placeholder="Search for product"
            className="w-full py-2 px-4 bg-gray-100 rounded-3xl outline-none text-sm"
          />
          <FaSearch className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-500" />
        </div>

        {/* Icons */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-900">
            <FiShoppingCart size={20} />
          </a>
          <a href="#" className="hover:text-gray-900">
            <HiOutlineUserCircle size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        {/* Hamburger Menu */}
        <button
          className="text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Logo */}
        <span className="text-2xl font-serif font-bold">SHOP.CO</span>

        {/* Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-900">
            <FiShoppingCart size={20} />
          </a>
          <a href="#" className="hover:text-gray-900">
            <HiOutlineUserCircle size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-gray-100 px-4 py-3 space-y-3">
          <a href="#" className="text-base hover:text-gray-900">
            New Arrivals
          </a>
          <a href="#" className="text-base hover:text-gray-900">
            OnSale
          </a>
          <a href="#" className="text-base hover:text-gray-900">
            Brands
          </a>
          <a href="#" className="text-base hover:text-gray-900">
            Shop <FaAngleDown className="inline ml-1" />
          </a>
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search for product"
              className="w-full py-2 px-4 bg-gray-200 rounded-3xl outline-none text-sm"
            />
            <FaSearch className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-500" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;



// 'use client'
// import React, { useState } from "react";
// import { FaAngleDown, FaSearch, FaBars } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";
// import { HiOutlineUserCircle } from "react-icons/hi";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
    // setIsMenuOpen((prevState) => !prevState);
//   };

//   return (
//     <header className="text-gray-600 body-font bg-white shadow-md">
//       {/* Main Container */}
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Hamburger Menu */}
//         <button
//           className="lg:hidden text-gray-900 text-2xl"
//           onClick={toggleMenu}
//         >
//           <FaBars />
//         </button>

//         {/* Logo */}
//         <a className="flex title-font font-medium items-center text-gray-900">
//           <span className="text-xl font-serif">SHOP.CO</span>
//         </a>

//         {/* Cart and User Icons */}
//         <nav className="flex items-center gap-4">
//           <a href="#" className="text-gray-900">
//             <FiShoppingCart size={20} />
//           </a>
//           <a href="#" className="text-gray-900">
//             <HiOutlineUserCircle size={20} />
//           </a>
//         </nav>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-gray-100 border-t border-gray-300">
//           <nav className="space-y-4 p-4">
//             <a href="#shop" className="block hover:text-gray-900">
//               Shop
//               <FaAngleDown className="inline-block ml-2 text-sm" />
//             </a>
//             <a href="#onsale" className="block hover:text-gray-900">
//               OnSale
//             </a>
//             <a href="#new-arrivals" className="block hover:text-gray-900">
//               New Arrivals
//             </a>
//             <a href="#brands" className="block hover:text-gray-900">
//               Brands
//             </a>

//             {/* Search Bar */}
//             <div className="relative bg-gray-200 rounded-lg mt-4">
//               <input
//                 type="text"
//                 className="w-full p-2 rounded-lg outline-none"
//                 placeholder="Search for products"
//               />
//               <FaSearch className="absolute right-3 top-2.5 text-gray-600" />
//             </div>
//           </nav>
//         </div>
//       )}

//       {/* Desktop Navbar */}
//       <div className="hidden lg:flex items-center justify-between p-4">
//         <nav className="flex gap-8">
//           <a href="#shop" className="hover:text-gray-900 flex items-center">
//             Shop <FaAngleDown className="ml-1" />
//           </a>
//           <a href="#onsale" className="hover:text-gray-900">
//             OnSale
//           </a>
//           <a href="#new-arrivals" className="hover:text-gray-900">
//             New Arrivals
//           </a>
//           <a href="#brands" className="hover:text-gray-900">
//             Brands
//           </a>
//         </nav>

//         {/* Search Bar */}
//         <div className="relative bg-gray-200 rounded-lg w-1/3">
//           <input
//             type="text"
//             className="w-full p-2 rounded-lg outline-none"
//             placeholder="Search for products"
//           />
//           <FaSearch className="absolute right-3 top-2.5 text-gray-600" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;









// import React from 'react'
// import { FaAngleDown } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";
// import { HiOutlineUserCircle } from "react-icons/hi2";
// import { CiSearch } from "react-icons/ci";
// import { FaSearch } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div>
//         <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       {/*  */}
{/* //       <span className="ml-3 text-xl font-serif">SHOP.CO</span>
//     </a>
//     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900">Shop <span><FaAngleDown className="ml-10 top-1" /> </span>
//       </a>
//       <a className="mr-5 hover:text-gray-900">OnSale</a>
//       <a className="mr-5 hover:text-gray-900">New Arrivals</a>
//       <a className="mr-5 hover:text-gray-900">Brands</a>
//     </nav>
//     <div className='mr-48 w-[500] bg-gray-300' style={{ position: "relative" }}
// > */}

{/* //                   <input */}
{/* //                     className=" bg-gray-300 rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
//                     placeholder="Search for product"
//                   />
//                   <FaSearch className="w-5 h-5 text-black absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
//                 </div>
    
     
//     <nav className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 gap-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    
//     <a href=""><FiShoppingCart  size={20}/></a>
//      <a href=""><HiOutlineUserCircle  size={20}/></a>
//     </nav>
//   </div> */}
{/* //   <div className="w-full h-[1px] bg-gray-300 mt-4" />

// </header>
// </div> */}
{/* //   );
// }

// export default Header
 */}





















