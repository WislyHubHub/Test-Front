import { Link } from "react-router-dom";
import logo from "../IMG/Bistro.png";
import imgfood1 from "../IMG/food1.png";

export default function homepage() {
  const navStyle = {
    backgroundColor: "#F4EAE0",
  };

  return (
    <>
      <div className="navbar bg-base-100" style={navStyle}>
        <div className="w-20 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={logo} />
        </div>
        <div dir="ltr" className="flex-1">
          <a className="btn btn-ghost text-xl">Bistro Delicious Food</a>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:hover:text-gray-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profileuser" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex p-4 space-x-4 bg-yellow-100 w-full h-screen">
        {/* คอนเทนเนอร์ฝั่งซ้าย */}
        <div className="flex-1 p-4 rounded flex flex-col justify-center items-center text-center">
          <div className="p-6 rounded-lg shadow-md">
            <p className="font-semibold text-[50px] text-left">
              The Food so Delicious
            </p>
            <p className="mt-2 text-left">
              Food is more than just a necessity for survival; it is an art
              form, a cultural expression, and a universal language that brings
              people together. Across the globe, different regions have
              developed unique cuisines, each telling a story of their history,
              traditions, and local ingredients. From the aromatic spices of
              Indian curries to the delicate flavors of Japanese sushi, every
              dish represents a blend of flavors, techniques, and creativity.
            </p>
          </div>
        </div>

        {/* คอนเทนเนอร์ฝั่งขวา */}
        <div className="flex-1 p-4 rounded">
          <div className="flex justify-center items-center rounded-full w-full h-full md:size-full">
            <img alt="Tailwind CSS Navbar component" src={imgfood1} />
          </div>
        </div>
      </div>
    </>
  );
}
