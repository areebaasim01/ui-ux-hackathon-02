import { useState } from 'react';
import dropdown from '/public/ham.webp'
import Image from 'next/image';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div >
      {/* Dropdown button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className=""
        type="button"
      >
       <Image src={dropdown} width={25} height={25} alt='icon'/>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
       
       <div
          id="dropdown"
          className=" z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a
                href="/Tshirts"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                T-shirts
              </a>
            </li>
            <li>
              <a
                href="/Casual"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Casual
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
          <div> 
            <Image
                            src="/SHOP.CO.png"
                            alt="Shop.co Logo"
                            width={120}
                            height={22}
                            className="sm:w-[160px] h-auto"
                          />
          </div>
        </div>

       
      
      )}


    </div>
  );
};

export default Dropdown;
