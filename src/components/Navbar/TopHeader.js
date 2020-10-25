import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import "../../css/jquery.simpleTicker.css"
// import "../../js/jquery.simpleTicker"

const Navbar = () => {
  return (
    // <!-- Top Header Area -->
    <TopWrapper>
      <div className="top-header-area">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-between">
            {/* <!-- Breaking News --> */}
            <div className="col-12 col-sm-6">
              <div className="breaking-news">
                <div id="ticker-roll">
                  <ul className="ticker">
                    <li>
                      <Link to="/">Hello World!</Link>
                    </li>
                    <li>
                      <Link to="/">Welcome to Colorlib Family.</Link>
                    </li>
                    <li>
                      <Link to="#">Hello Delicious!</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Top Social Info --> */}
            <div className="col-12 col-sm-6">
              <div className="top-social-info text-right">
                <Link to="/">
                  <i className="fab fa-pinterest" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-dribbble" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-behance" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopWrapper>
  )
}

const TopWrapper = styled.div`
  .top-header-area {
    width: 100%;
    height: 50px;
    background-color: #ffffff;

    border-bottom: 1px solid #dddee9;
  }
  @media only screen and (max-width: 767px) {
    .top-header-area {
      height: 70px;
    }
  }
  .top-header-area .breaking-news {
    position: relative;
    z-index: 1;
  }
  .top-header-area .breaking-news .ticker {
    width: 100%;
    text-align: left;
    position: relative;
    overflow: hidden;
  }
  .top-header-area .breaking-news .ticker ul {
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .top-header-area .breaking-news .ticker ul li {
    display: none;
    width: 100%;
  }
  .top-header-area .breaking-news .ticker ul li a {
    font-size: 14px;

    color: pink;
    font-style: italic;
  }
  .top-header-area .breaking-news .ticker ul li a:hover,
  .top-header-area .breaking-news .ticker ul li a:focus {
    color: green;
  }
  .top-header-area .top-social-info a {
    display: inline-block;
    color: #b6b6b6;
    font-size: 13px;
    margin-right: 30px;
  }
  .top-header-area .top-social-info a:last-child {
    margin-right: 0;
  }
  .top-header-area .top-social-info a:hover,
  .top-header-area .top-social-info a:focus,
  .top-header-area .top-social-info a.active {
    color: #40ba37;
  }
  .breaking-news {
    overflow: hidden;
    height: 20px;
  }
  .ticker {
    border: none !important;
    /* padding: 10px; */
  }
  .ticker {
    margin: 0 auto;
    border: none !important;
    padding: 0;
    width: 600px;
    text-align: left;
    border: #ccc 1px solid;
    position: relative;
    overflow: hidden;
    background-color: #ffff;

    animation: upward 8s infinite;
  }
  .ticker li a {
    color: #b6b6b6;
    text-decoration: none;
    font-style: italic;
  }
  .ticker li a:hover,
  .ticker li a:focus,
  .ticker li a:active {
    color: #40ba37;
  }
  @keyframes upward {
    from {
      top: 0px;
    }
    to {
      top: -50px;
    }
  }
  /* @-moz-keyframes twist { 100% { -moz-transform: rotate3d(0, 0, 1, 45deg); } }
@-webkit-keyframes twist { 100% { -webkit-transform: rotate3d(0, 0, 1, 45deg); } }
@keyframes twist { 100% { -webkit-transform: rotate3d(0, 0, 1, 45deg); transform: rotate3d(0, 0, 1, 45deg); } } */

  .ticker ul {
    width: 100%;
    position: relative;
  }

  .ticker ul li {
    width: 100%;
    display: none;
  }
`

export default Navbar
