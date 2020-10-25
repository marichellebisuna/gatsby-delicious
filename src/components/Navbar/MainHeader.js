import React, { useContext } from "react"
import Logo from "../../images/core-img/logo.png"
import { Link } from "gatsby"
import styled from "styled-components"
import "../../css/classy-nav.min.css"
import { GatsbyContext } from "../../context/context"

const MainHeader = () => {
  const {
    isSidebarOpen,
    showSidebar,
    hideSidebar,
    isSearchbarOpen,
    hideSearchbar,

    showSearchbar,
  } = useContext(GatsbyContext)
  // const closebar = (
  //   <div className="classycloseIcon">
  //     <div className="cross-wrap">
  //       <span className="top"></span>
  //       <span className="bottom"></span>
  //     </div>
  //   </div>
  // )
  return (
    // <!-- Navbar Area -->
    <MainWrapper>
      <div className="delicious-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            {/* <!-- Menu --> */}
            <nav
              className="classy-navbar d-flex align-items-center justify-content-between"
              id="deliciousNav"
            >
              {/* <!-- Logo --> */}

              <Link className="nav-brand " to="/">
                <img src={Logo} alt="" />
              </Link>

              {/* <!-- Nav Start --> */}
              <div className="classynav">
                <ul className="nav-links ">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/recipes">Recipes</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Nav End --> */}

              {/* <!-- Newsletter Form --> */}
              <div
                className="search-btn"
                onClick={isSearchbarOpen ? hideSearchbar : showSearchbar}
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              {/* <!-- Navbar Toggler --> */}
              <div
                className="classy-navbar-toggler"
                onClick={isSidebarOpen ? hideSidebar : showSidebar}
              >
                <span className="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                {/* {isSidebarOpen ? (
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>
                ) : (
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                )} */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  .delicious-main-menu {
    position: relative;
    width: 100%;
    z-index: 100;
    height: 145px;
  }
  .classy-navbar {
    width: 100%;
  }
  .show-container {
    display: none;
  }
  .classy-navbar-toggler {
    display: none;
  }
  .nav-links {
    display: flex;
  }
  .search-btn i {
    color: #b6b6b6 !important;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    .classy-navbar-toggler {
      display: block;
    }
    .classynav {
      height: auto !important;
    }
    .search-btn {
      display: none;
    }
    .classynav ul li {
      display: none;
    }
    .classynav {
      height: 0;
      overflow: hidden;
      transition: var(--transition);
    }
    .show-container {
      height: 10rem;
    }
    .delicious-main-menu .classynav .search-btn {
      margin-left: 50px;
    }
  }
  .delicious-main-menu .classy-nav-container {
    background-color: transparent;
  }
  .delicious-main-menu .classy-navbar {
    height: 145px;
    padding: 0;
  }
  @media only screen and (max-width: 767px) {
    .delicious-main-menu .classy-navbar {
      height: 80px;
    }
  }
  .delicious-main-menu .classy-navbar .classynav ul li a {
    font-weight: 600;
    margin-right: 2px;
  }
  .delicious-main-menu .classy-navbar .classynav ul li a:hover,
  .delicious-main-menu .classy-navbar .classynav ul li a:focus {
    font-weight: 600;
  }
  .delicious-main-menu .classy-navbar .classynav > ul > li > a {
    text-transform: uppercase;
    padding: 12px 18px 11px;
    background-color: transparent;
    border-bottom: 3px solid transparent;
    line-height: 1;
    color: #474747;
    font-weight: 600;
  }
  .delicious-main-menu .classy-navbar .classynav > ul > li > a:hover,
  .delicious-main-menu .classy-navbar .classynav > ul > li > a:focus {
    font-size: 14px;
    color: #ffffff;
    background-color: #40ba37;
    border-bottom: 3px solid #1c8314;
  }

  .delicious-main-menu .classy-navbar .classynav > ul > li > a:hover::after,
  .delicious-main-menu .classy-navbar .classynav > ul > li > a:focus::after {
    color: #ffffff;
  }

  .delicious-main-menu .classy-navbar .classynav > ul > li.active > a {
    color: #ffffff;
    background-color: #40ba37;
    border-bottom: 3px solid #1c8314;
  }

  .delicious-main-menu .classy-navbar .classynav > ul > li.active > a::after {
    color: #ffffff;
  }
  .delicious-main-menu .classynav .search-btn i {
    color: #b6b6b6 !important;
    margin-left: 150px;
    cursor: pointer;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
  }
  .delicious-main-menu .classynav .search-btn i {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
  }
  .delicious-main-menu .classynav .search-btn:hover i,
  .delicious-main-menu .classynav .search-btn:focus i {
    color: #40ba37;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .delicious-main-menu .classynav .search-btn {
      margin-left: 50px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .delicious-main-menu .classynav .search-btn {
      margin-left: 30px;
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    .delicious-main-menu .classynav .search-btn {
      margin-left: 30px;
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    .nav-brand img {
      max-width: 90px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .breakpoint-on .classynav ul li.cn-dropdown-item > a::after,
    .breakpoint-on .classynav ul li.megamenu-item > a::after {
      top: 5px;
    }
  }
  @media only screen and (max-width: 767px) {
    .breakpoint-on .classynav ul li.cn-dropdown-item > a::after,
    .breakpoint-on .classynav ul li.megamenu-item > a::after {
      top: 10px;
    }
  }

  .classy-navbar-toggler .navbarToggler span {
    position: relative;
    background-color: #858585;
    border-radius: 3px;
    display: block;
    height: 3px;
    margin-top: 5px;
    padding: 0;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    width: 30px;
    cursor: pointer;
  }
  .classy-navbar-toggler .navbarToggler.active span:nth-of-type(1) {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    -moz-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);   
    top: 8px;   
    
}

.classy-navbar-toggler .navbarToggler.active span:nth-of-type(2) {
    opacity: 0;    
  }
  .classy-navbar-toggler .navbarToggler.active span:nth-of-type(3) {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    -moz-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);   
    top: -8px;
    
}

/* @-moz-keyframes spin { 100% { -moz-transform: rotate(0, 0, 1, -45deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(0, 0, 1, -45deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(0, 0, 1, -45deg); transform: rotate(0, 0, 1, -45deg); } } */

  }
  @media only screen and (max-width: 1000px) {
    .classycloseIcon {
      color: #858585;
      top: 60px;
      right: 150px;
      z-index: 12;
      display: block;
      transition: all 0.3s linear;
    }
    .classycloseIcon .cross-wrap {
      width: 26px;
      height: 26px;
      cursor: pointer;
      position: relative;
    }
    .classycloseIcon .cross-wrap span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      border-radius: 6px;
      background: #858585;
    }
    .classycloseIcon .cross-wrap span.top {
      top: 12px;
      left: 0;
      -webkit-animation:spin 0.1s linear ;
    -moz-animation:spin 0.1s linear ;
    animation:spin 0.1s linear ;
}

@-moz-keyframes spin { 100% { -moz-transform: rotate(45deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(45deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(45deg); transform:spin(45deg); } }

      /* -webkit-transform: rotate(45deg);
      transform: rotate(45deg); */
      
    }
    .classycloseIcon .cross-wrap span.bottom {
      bottom: 12px;
      left: 0;
      -webkit-animation:spin 0.1s linear ;
    -moz-animation:spin 0.1s linear ;
    animation:spin 0.1s linear ;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(-45deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(-45deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(-45deg); transform:spin(-45deg); } }
      /* -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg); */
    }
  }
`

export default MainHeader
