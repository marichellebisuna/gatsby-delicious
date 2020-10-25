import React, { Component } from "react"
import styled from "styled-components"

export default class NavbarSearch extends Component {
  render() {
    return (
      // <!-- Search Wrapper -->
      <SearchWrapper>
        <div className="search-wrapper">
          {/* <!-- Close Btn --> */}
          <div className="close-btn">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#" method="post">
                  <input
                    type="search"
                    name="search"
                    placeholder="Type any keywords..."
                  />
                  <button type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  .search-wrapper {
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 200;
    top: -80px;
    left: 0;
    background-color: #40ba37;
    animation: opensearchbar 0.3s forwards;
  }

  @keyframes opensearchbar {
    from {
      top: -80px;
    }
    to {
      top: 0px;
    }
  }

  .search-wrapper form {
    position: relative;
    z-index: 1;
  }
  .search-wrapper form input {
    width: 90%;
    height: 40px;
    border: 2px solid #ffffff;
    font-size: 12px;
    font-style: italic;
    padding: 0 20px;
    margin: 15px 0;
  }
  @media only screen and (max-width: 767px) {
    .search-wrapper form input {
      width: 80%;
    }
  }
  .search-wrapper form button {
    position: absolute;
    width: 60px;
    height: 40px;
    z-index: 1;
    top: 15px;
    border: none;
    right: 10%;
    cursor: pointer;
    outline: none;
  }
  @media only screen and (max-width: 767px) {
    .search-wrapper form button {
      right: 20%;
    }
  }
  .search-wrapper .close-btn {
    position: absolute;
    width: 70px;
    height: 100%;
    background-color: #000000;
    line-height: 50px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    line-height: 70px;
    font-size: 12px;
    right: 0;
    top: 0;
    z-index: 100;
  }
  .search-wrapper.on {
    top: 0;
  }
`
