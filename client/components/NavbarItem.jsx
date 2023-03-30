import React from "react";
import Link from "next/link";

const Navbar = ({label, active, address}) => {

    

    return(
        <Link href={address} className={active ? 'text-white cursor-default': 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
            {label}
        </Link>
    )
};

export default Navbar;