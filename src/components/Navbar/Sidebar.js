import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyContext } from "../../context/context"

const Sidebar = () => {
  const {
    isSidebarOpen,
    hideSidebar,
    isSearchbarOpen,
    hideSearchbar,
    showSearchbar,
  } = useContext(GatsbyContext)

  return (
    <div>
      <Wrapper>
        <div className={isSidebarOpen ? "container" : "container sidebarclose"}>
          {/* <!-- Menu --> */}
          <div
            className="classy-menu"
            onClick={hideSidebar}
            // onClick={isSidebarOpen ? hideSidebar : showSidebar}
            // style={{
            //   width: "30vw",
            //   animation: "opensidebar 0.3s backwards",
            // }}
          >
            {/* <!-- close btn --> */}
            <div className="classycloseIcon">
              <div className="cross-wrap">
                <span className="top"></span>
                <span className="bottom"></span>
              </div>
            </div>
          </div>

          <div className="classynav">
            <ul className="nav-links ">
              <li className="active" onClick={hideSidebar}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link href="/recipes">Recipes</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* <!-- Newsletter Form --> */}

          <div
            className="search-btn"
            onClick={isSearchbarOpen ? hideSearchbar : showSearchbar}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
export default Sidebar

const Wrapper = styled.div`
  .container {
    width: 0;
    height: 100vh;
    background-color: white;
    -webkit-box-shadow: 2px 0px 14px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 0px 14px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 0px 14px -10px rgba(0, 0, 0, 0.75);
    top: -1px;
    left: 0;
    position: fixed;
    z-index: 999;
    animation: opensidebar 0.3s forwards;
  }

  @keyframes opensidebar {
    from {
      width: 0%;
    }
    to {
      width: 30%;
    }
  }

  .search-btn i {
    color: #b6b6b6 !important;
    cursor: pointer;
    position: absolute;
    top: 210px;
    left: 0;
    padding-left: 20px;
  }
  .search-btn i:hover,
  .search-btn i:focus,
  .search-btn i:active {
    color: #40ba37 !important;
  }
  .nav-links li {
    display: block;
  }
  .classynav {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    margin: 0;
  }
  @media (min-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    .classycloseIcon {
      top: 20px;
      right: 20px;
      z-index: 12;
      display: block;
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
      background: #232323;
    }
    .classycloseIcon .cross-wrap span.top {
      top: 12px;
      left: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .classycloseIcon .cross-wrap span.bottom {
      bottom: 12px;
      left: 0;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }

  .classynav ul li a {
    font-weight: 600;
    margin-right: 2px;
  }
  .classynav ul li a:hover,
  .classynav ul li a:focus {
    font-weight: 600;
  }
  .classynav > ul > li > a {
    text-transform: uppercase;
    padding: 12px 18px 11px;
    background-color: transparent;
    border-bottom: 3px solid transparent;
    line-height: 1;
    color: #474747;
    font-weight: 600;
  }
  .classynav > ul > li > a:hover,
  .classynav > ul > li > a:focus {
    font-size: 14px;
    color: #ffffff;
    background-color: #40ba37;
    border-bottom: 3px solid #1c8314;
  }

  .classynav > ul > li > a:hover::after,
  .classynav > ul > li > a:focus::after {
    color: #ffffff;
  }

  .classynav > ul > li.active > a {
    color: #ffffff;
    background-color: #40ba37;
    border-bottom: 3px solid #1c8314;
  }

  .classynav > ul > li.active > a::after {
    color: #ffffff;
  }
`
