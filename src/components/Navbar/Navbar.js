import React, { useContext } from "react"
import TopHeader from "./TopHeader"
import MainHeader from "./MainHeader"
import NavbarSearch from "./NavbarSearch"
import styled from "styled-components"
import { GatsbyContext } from "../../context/context"

const Navbar = () => {
  const { isSearchbarOpen } = useContext(GatsbyContext)
  return (
    <>
      {isSearchbarOpen && <NavbarSearch />}
      {/* <NavbarSearch /> */}
      {/* <!-- ##### Header Area Start ##### --> */}
      <HeaderWrapper className="header-area">
        <TopHeader />
        <MainHeader />
      </HeaderWrapper>
      {/* <!-- ##### Header Area End ##### --> */}
    </>
  )
}

const HeaderWrapper = styled.header`
  .header-area {
    position: relative;
    z-index: 100;
    width: 100%;
  }
  .header-area .top-header-area {
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid #dddee9;
  }
  @media only screen and (max-width: 767px) {
    .header-area .top-header-area {
      height: 70px;
    }
  }
  .header-area .top-header-area .breaking-news {
    position: relative;
    z-index: 1;
  }
  .header-area .top-header-area .breaking-news .ticker {
    width: 100%;
    text-align: left;
    position: relative;
    overflow: hidden;
  }
  .header-area .top-header-area .breaking-news .ticker ul {
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .header-area .top-header-area .breaking-news .ticker ul li {
    display: none;
    width: 100%;
  }
  .header-area .top-header-area .breaking-news .ticker ul li a {
    font-size: 14px;
    color: #b6b6b6;
    font-style: italic;
  }
  .header-area .top-header-area .breaking-news .ticker ul li a:hover,
  .header-area .top-header-area .breaking-news .ticker ul li a:focus {
    color: #40ba37;
  }
  .header-area .top-header-area .top-social-info a {
    display: inline-block;
    color: #b6b6b6;
    font-size: 13px;
    margin-right: 30px;
  }
  .header-area .top-header-area .top-social-info a:last-child {
    margin-right: 0;
  }
  .header-area .top-header-area .top-social-info a:hover,
  .header-area .top-header-area .top-social-info a:focus,
  .header-area .top-header-area .top-social-info a.active {
    color: #40ba37;
  }
`
export default Navbar
