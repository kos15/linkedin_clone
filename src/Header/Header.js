import { useState } from "react";

function Header(props) {
  const navEle = [];

  for (let e of props.elements) {
    if(e?.count <= 0){
        navEle.push(
            <li>
              <div class="mx-2">
              <button type="button" class="btn btn-primary position-relative">
                {e?.title}
              </button>
            </div>
            </li>
          );
    } else {
        navEle.push(
            <li>
              <div class="mx-2">
              <button type="button" class="btn btn-primary position-relative">
                {e?.title}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {e?.count}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
            </li>
          );
    }
  }

  return (
    <nav class="navbar bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand">
          <i class="bi bi-linkedin"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="auto"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">{navEle}</ul>
        {/* <div class="d-flex justify-content-evenly">{navEle}</div> */}
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
