import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo_RB from "../assets/Logo_RB.svg";
import IconRB2 from "../assets/IconRB2.jpeg";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
   const [openHamburger, setOpenHamburger] = useState(false);
   const [navbar, setNavbar] = useState(false);
   const [hovered, setHovered] = useState(false);

   const handleHamburgerClick = (e) => {
      e.stopPropagation();
      setOpenHamburger(!openHamburger);
      // setSelectedIcon(null);
   };

   // logic ketika diklik diluar hamburgermenu maka otomatis tertutup dan begitu juga ketika klik pindah halaman
   useEffect(() => {
      const closeHamburgerMenu = () => {
         setOpenHamburger(false);
      };

      // Menambahkan event listener ke window
      window.addEventListener("click", closeHamburgerMenu);
   }, []);


   const Menus = [
     {
       name: "Tentang Kami",
       link: "",
     },
     {
       name: "Inspirasi Karir",
       link: "",
     },
     {
       name: "Berita",
       link: "",
     }
   ];

   // logic navbar on scroll to blur background
   const changeBackground = () => {
      if (window.scrollY >= 80) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener("scroll", changeBackground);

   return (
     <nav
       className={`w-full shadow-md fixed z-20 bg-white pb-2 ${
         navbar
           ? "bg-opacity-60 backdrop-blur-sm shadow-slate-500 shadow-sm duration-500"
           : ""
       }`}
     >
       <div className="flex justify-between items-center mx-4 mt-2">
         {/* logo */}
         <Link to={"/"} className="lg:hidden">
           <img
             src={Logo_RB}
             alt="Logo_RB"
             className="w-34 h-20 lg:w-26 lg:h-26"
           />
         </Link>
         {/* Navmenu Mobile */}
         <div className="flex lg:hidden">
           {/* menu katalog */}
           <div className="flex-none">
             <ul className="menu menu-horizontal px-1">
               <li>
                 <details>
                   <summary className="text-lg">Katalog</summary>
                   <ul className="p-2 bg-base-100 rounded-t-none">
                     <Link as={Link} to={""}>
                       <li>
                         <a>Balikpapan</a>
                       </li>
                     </Link>
                     <Link as={Link} to={""}>
                       <li>
                         <a>Samarinda</a>
                       </li>
                     </Link>
                     <Link as={Link} to={""}>
                       <li>
                         <a>Berau</a>
                       </li>
                     </Link>
                     <Link as={Link} to={""}>
                       <li>
                         <a>Penajam Paser Utara</a>
                       </li>
                     </Link>
                     <Link as={Link} to={""}>
                       <li>
                         <a>Kutai Kartanegara</a>
                       </li>
                     </Link>
                   </ul>
                 </details>
               </li>
             </ul>
           </div>

           {/* Navmenu */}
           <button className="text-blue-700" onClick={handleHamburgerClick}>
             {openHamburger ? (
               <RxCross2 className="w-10 h-10" />
             ) : (
               <FiMenu className="w-10 h-10" />
             )}
           </button>
           <div
             className={`${
               openHamburger
                 ? "translate-y-0"
                 : "-translate-y-[380px] ease-in-out"
             } transition-transform duration-300 ease-in-out absolute top-4 right-4 mt-14 z-50 bg-gradient-to-r bg-white  border border-blue-700 px-5 py-6 rounded-md shadow-lg flex flex-col gap-2`}
           >
             {Menus.map((item, index) => (
               <NavLink key={index} to={item.link} className="">
                 {item.name}
               </NavLink>
             ))}
             <div className="h-px bg-slate-700 my-2"></div>
             <div className="border-none px-4 py-2 bg-blue-700 rounded-2xl text-white">
               <Link as={Link} to={""} className="block w-full h-full">
                 <button className="w-full h-full">Dapatkan Aplikasi</button>
               </Link>
             </div>
           </div>
         </div>

         {/* Navmenu Website */}
         <div className="hidden container mx-auto lg:flex justify-between">
           <div className="hidden lg:flex lg:items-center lg:gap-14">
             <Link to={"/"} className="">
               <img
                 src={Logo_RB}
                 alt="Logo_RB"
                 className="w-34 h-20 lg:w-26 lg:h-26"
               />
             </Link>
             {/* navmenu */}
             <div className="hidden lg:flex lg:gap-24">
               {Menus.map((item, index) => (
                 <NavLink
                   key={index}
                   to={item.link}
                   className="text-lg hover:scale-105 duration-300 ease-in-out flex items-center hover:shadow-xl hover:rounded-xl hover:px-4 hover:bg-primary hover:text-white hover:drop-shadow-lg"
                 >
                   {item.name}
                 </NavLink>
               ))}
             </div>
             {/* menu katalog*/}
             <div className="flex-none">
               <ul className="menu menu-horizontal px-1">
                 <li>
                   <details>
                     <summary className="text-lg">Katalog</summary>
                     <ul className="p-2 bg-base-100 rounded-t-none">
                       <Link as={Link} to={""}>
                         <li>
                           <a>Balikpapan</a>
                         </li>
                       </Link>
                       <Link as={Link} to={""}>
                         <li>
                           <a>Samarinda</a>
                         </li>
                       </Link>
                       <Link as={Link} to={""}>
                         <li>
                           <a>Berau</a>
                         </li>
                       </Link>
                       <Link as={Link} to={""}>
                         <li>
                           <a>Penajam Paser Utara</a>
                         </li>
                       </Link>
                       <Link as={Link} to={""}>
                         <li>
                           <a>Kutai Kartanegara</a>
                         </li>
                       </Link>
                     </ul>
                   </details>
                 </li>
               </ul>
             </div>
           </div>

           {/* Daftar sekarang */}
           <div className="hidden lg:flex items-center gap-7 mr-9">
             <ul className="menu menu-horizontal px-1">
               <li>
                 <details>
                   <summary className="border-none px-6 py-2 bg-blue-700 hover:bg-blue-800 duration-300 rounded-2xl text-white font-medium text-lg">
                     Daftar Sekarang
                   </summary>
                   <ul className="p-2 bg-base-100 rounded-t-none">
                     <Link
                       as={Link}
                       to={""}
                       className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                       onMouseEnter={() => setHovered(true)}
                       onMouseLeave={() => setHovered(false)}
                     >
                       <div
                         className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                           hovered ? "scale-105" : ""
                         }`}
                       >
                         <img
                           className="object-cover w-full h-full"
                           src={IconRB2}
                           alt="IconRB"
                         />
                       </div>
                       <div className="flex flex-col">
                         <p
                           className={`mb-0.5 text-sm font-semibold ${
                             hovered ? "text-blue-600" : "text-gray-800"
                           }`}
                         >
                           RB Balikpapan
                         </p>
                         <p className={`text-xs text-gray-600`}>instagram</p>
                       </div>
                     </Link>

                     <Link
                       as={Link}
                       to={""}
                       className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                       onMouseEnter={() => setHovered(true)}
                       onMouseLeave={() => setHovered(false)}
                     >
                       <div
                         className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                           hovered ? "scale-105" : ""
                         }`}
                       >
                         <img
                           className="object-cover w-full h-full"
                           src={IconRB2}
                           alt="IconRB"
                         />
                       </div>
                       <div className="flex flex-col">
                         <p
                           className={`mb-0.5 text-sm font-semibold ${
                             hovered ? "text-blue-600" : "text-gray-800"
                           }`}
                         >
                           RB Samarinda
                         </p>
                         <p className={`text-xs text-gray-600`}>instagram</p>
                       </div>
                     </Link>

                     <Link
                       as={Link}
                       to={""}
                       className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                       onMouseEnter={() => setHovered(true)}
                       onMouseLeave={() => setHovered(false)}
                     >
                       <div
                         className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                           hovered ? "scale-105" : ""
                         }`}
                       >
                         <img
                           className="object-cover w-full h-full"
                           src={IconRB2}
                           alt="IconRB"
                         />
                       </div>
                       <div className="flex flex-col">
                         <p
                           className={`mb-0.5 text-sm font-semibold ${
                             hovered ? "text-blue-600" : "text-gray-800"
                           }`}
                         >
                           RB Berau
                         </p>
                         <p className={`text-xs text-gray-600`}>instagram</p>
                       </div>
                     </Link>

                     <Link
                       as={Link}
                       to={""}
                       className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                       onMouseEnter={() => setHovered(true)}
                       onMouseLeave={() => setHovered(false)}
                     >
                       <div
                         className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                           hovered ? "scale-105" : ""
                         }`}
                       >
                         <img
                           className="object-cover w-full h-full"
                           src={IconRB2}
                           alt="IconRB"
                         />
                       </div>
                       <div className="flex flex-col">
                         <p
                           className={`mb-0.5 text-sm font-semibold ${
                             hovered ? "text-blue-600" : "text-gray-800"
                           }`}
                         >
                           RB Penajam Paser Utara
                         </p>
                         <p className={`text-xs text-gray-600`}>instagram</p>
                       </div>
                     </Link>

                     <Link
                       as={Link}
                       to={""}
                       className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                       onMouseEnter={() => setHovered(true)}
                       onMouseLeave={() => setHovered(false)}
                     >
                       <div
                         className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                           hovered ? "scale-105" : ""
                         }`}
                       >
                         <img
                           className="object-cover w-full h-full"
                           src={IconRB2}
                           alt="IconRB"
                         />
                       </div>
                       <div className="flex flex-col">
                         <p
                           className={`mb-0.5 text-sm font-semibold ${
                             hovered ? "text-blue-600" : "text-gray-800"
                           }`}
                         >
                           RB Kutai Kartanegara
                         </p>
                         <p className={`text-xs text-gray-600`}>instagram</p>
                       </div>
                     </Link>
                   </ul>
                 </details>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </nav>
   );
}

export default Navbar