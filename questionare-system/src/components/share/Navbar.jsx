import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import ModeToggle from '../ModeToggle';

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.value);

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
    // Optionally, toggle a class on the body or html element here
    document.documentElement.classList.toggle("dark", darkMode);
  };

  return (
    <header>
      <div className={`${darkMode ? 'dark' : 'light'} bg-background text-primary px-4 sm:px-6 lg:px-6`}>
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  d="M22.766,4.566A1.994,1.994,0,0,0,20.586,5L18,7.586,13.414,3a2,2,0,0,0-2.828,0L6,7.586,3.414,5A2,2,0,0,0,0,6.414V17a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6.414A2,2,0,0,0,22.766,4.566Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
              <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="/projects"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-textColor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Donate{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-primary-foreground dark:bg-primary px-5 py-2.5 text-sm font-medium text-textColor shadow"
                href="/login"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md px-5 py-2.5 bg-background text-sm font-medium text-textColor"
                  href="#"
                >
                  Register
                </a>
              </div>
              <div className="hidden sm:flex">
                <ModeToggle/>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded dark:bg-background p-2 text-textColor transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
