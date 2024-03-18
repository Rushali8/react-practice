import react from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar(props) {
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link "  href="/">
                  TextForm
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link "  href="/about">
                  About
                </a>
              </li>
            </ul>
            
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label"  for="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
