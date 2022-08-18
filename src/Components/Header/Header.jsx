import React from "react";
import { PaperAirplaneIcon, PlusCircleIcon, GlobeIcon, HeartIcon, SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import logo from "../../asetss/Instagram_logo.png";
import "./Header.css";
import mobin from '../../asetss/mobin.jpg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__contaner bg-light position-fixed start-50 translate-middle container-fluid">
      <header className="header mt-2 mx-auto">
        <div className="row align-items-center justify-content-center">
          <div className="col">
            <Link to={"/"}>
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="col position-relative ms-5">
            <input className="header__input-search" type="text" placeholder="Search" />
            <SearchIcon className="header__icons-search position-absolute" />
          </div>

          <div className="col">
            <div className="d-flex align-items-center justify-content-end gap-3">
              <Link className="text-dark" to="/">
                <HomeIcon className="header__icons d-none d-md-block" />
              </Link>

              {/* menu responsive */}
              <MenuIcon className="header__icons icon-menu d-black d-md-none"
                onClick={() =>
                  document.getElementById("dropdown-menu").classList.toggle("d-black") &&
                  document.getElementById("dropdown-menu").classList.remove("d-none")
                }
              />
              <div className="position-fixed top-100 end-0 bg-light d-none" id="dropdown-menu" >
                <ul className="d-flex align-items-end me-2 p-2 ps-5 gap-3 position-relative">
                  <li>
                    <Link className="text-dark" to="/">
                      <HomeIcon className="header__icons d-black d-md-none" />
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark" to="/masseges">
                      <PaperAirplaneIcon className="header__icons d-black d-md-none rotate-45 mb-1" />
                    </Link>
                  </li>
                  <li>
                    <a className="text-dark" href="#">
                      <PlusCircleIcon className="header__icons d-black d-md-none" />
                    </a>
                  </li>
                  <li>
                    <a className="text-dark" href="#">
                      <GlobeIcon className="header__icons d-black d-md-none" />
                    </a>
                  </li>
                  <li>
                    <a className="text-dark" href="#">
                      <HeartIcon className="header__icons d-black d-md-none" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="rounded-circle header__icons d-black d-md-none" src={mobin} alt="mobin" />
                    </a>
                  </li>
                  <XIcon
                    className="header__icons position-absolute top-0 start-0 p-1 border-0 fw-bold text-danger"
                    onClick={() =>
                      document.getElementById("dropdown-menu").classList.toggle("d-none") &&
                      document.getElementById("dropdown-menu").classList.remove("d-black")
                    }
                  />
                </ul>
              </div>
              <Link className="text-dark" to="/messages">
                <PaperAirplaneIcon className="header__icons  d-none d-md-block rotate-45 mb-2" />
              </Link>
              <PlusCircleIcon className="header__icons d-none d-md-block" />
              <GlobeIcon className="header__icons d-none d-md-block" />
              <HeartIcon className="header__icons d-none d-md-block" />
              <img className="rounded-circle header__icons d-none d-md-block" src={mobin} alt="mobin" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
