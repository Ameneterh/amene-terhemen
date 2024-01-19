import { Button, Navbar } from "flowbite-react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../redux/theme/themeSlice";

function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50">
      <Navbar
        fluid
        rounded
        className="border-b-2 bg-slate-200 dark:bg-slate-900"
      >
        <div className="flex justify-center">
          <img
            src="at-personal-logo.png"
            alt="profile"
            className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white p-1 object-cover border-2 border-red-500"
          />
        </div>

        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10"
            color="gray"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </Button>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="hover:underline underline-offset-4">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/services"} as={"div"}>
            <Link to="/services" className="hover:underline underline-offset-4">
              Services
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects" className="hover:underline underline-offset-4">
              Projects
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
