export default function Dasiui() {
    return (
      <div className="shadow-sm">
        <div className="navbar bg-base-100 px-4 sm:px-6 md:px-10">
          {/* Start: Mobile Hamburger */}
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>Home</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </div>
  
          {/* Center: Logo + Full Menu on Desktop */}
          <div className="navbar-center lg:navbar-start">
            <a className="btn btn-ghost text-2xl font-bold tracking-wide">daisyUI</a>
          </div>
  
          {/* Full Menu on lg+ */}
          <div className="hidden lg:flex  lg:ml-6">
            <ul className="menu menu-horizontal flex px-1 space-x-2 text-base font-medium">
              <li><a className="hover:text-primary">Home</a></li>
              <li><a className="hover:text-primary">Portfolio</a></li>
              <li><a className="hover:text-primary">About</a></li>
              <li><a className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
  
          {/* End: Icons */}
          <div className="navbar-end space-x-2">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  