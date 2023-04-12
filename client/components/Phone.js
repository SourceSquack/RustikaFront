import { FaPhoneAlt } from 'react-icons/fa';

export const Phone = () => {
    return (
        <div className="w-full flex m-2 items-start lg:flex flex-row">
            <div className="flex items-center">
                <FaPhoneAlt />
                <p className="ml-2">Phone: </p>
            </div>
            <div className="ml-1 w-full">
                <p>315 788 0615</p>
            </div>
        </div>
    )
}
