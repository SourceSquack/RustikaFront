import React from "react";

const Navbar = ({label, active}) => {

    

    return(
        <div className={active ? 'text-white cursor-default': 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
            {label}
        </div>
    )
};

export default Navbar;