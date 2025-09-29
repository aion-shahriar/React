import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {

    const [open, setOpen]= useState(false);
    const links = navData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10 mt-10'>



            <span className='flex gap-4' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>}
                
                <ul className={`md:hidden absolute duration-1000
                    ${open? 'top-8': "-top-40"}
                     bg-amber-200`}>
                    {links}
                </ul>
                <h3 className=''>My navbar</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}




            {/* <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul> */}


            <button className='btn btn-primary'>Sign In</button>
            
        </nav>
    );
};

export default Navbar;