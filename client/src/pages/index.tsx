export default () => {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md fixed-top navbar-color">
        <div className="container">
          <a className="navbar-brand">SSIFF</a>
            <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler">
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link">FESTIVALS &amp; EVENTS </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">SSIFF21 SPRING FESTIVAL</a>
                    <a className="dropdown-item">SSIFF21 FALL FESTIVAL</a>
                    <a className="dropdown-item">HOW TO SSIFF</a>
                    <a className="dropdown-item">SSIFF MERCH</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link">SUPPORT </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">SSIFF MEMBERSHIP</a>
                    <a className="dropdown-item">DONATE TO SSIFF</a>
                    <a className="dropdown-item">VOLUNTEER AT SSIFF</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link">ABOUT </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">ABOUT SSIFF</a>
                    <a className="dropdown-item">CONTACT SSIFF</a>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-nowrap">SIGN IN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-nowrap">SIGN UP</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-nowrap">PROFILE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-nowrap">SIGN OUT</a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  ); 
};

