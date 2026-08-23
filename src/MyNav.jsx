import React from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

import {
  FaHouse,
  FaCircleInfo,
  FaPhone,
  FaBuildingColumns,
  FaChevronRight,
} from "react-icons/fa6";

import {
  Link,
  useLocation,
} from "react-router-dom";

function MyNav() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="premium-navbar"
    >

      <Container fluid className="px-4">

        {/* ================= BRAND ================= */}

        <Navbar.Brand
          as={Link}
          to="/home"
          className="premium-brand"
        >

          <div className="brand-logo">
            <FaBuildingColumns />
          </div>

          <div className="brand-details">

            <div className="brand-title">
              RD Banking
            </div>

            <div className="brand-subtitle">
              MANAGEMENT SYSTEM
            </div>

          </div>

        </Navbar.Brand>


        {/* ================= MOBILE TOGGLE ================= */}

        <Navbar.Toggle
          aria-controls="main-navbar"
          className="premium-toggle"
        />


        <Navbar.Collapse id="main-navbar">

          {/* ================= NAVIGATION ================= */}

          <Nav className="ms-auto align-items-lg-center premium-nav">

            {/* HOME */}

            <Nav.Link
              as={Link}
              to="/home"
              className={`premium-nav-link ${
                isActive("/home")
                  ? "active"
                  : ""
              }`}
            >

              <span className="nav-icon">
                <FaHouse />
              </span>

              <span>
                Home
              </span>

            </Nav.Link>


            {/* ABOUT */}

            <Nav.Link
              as={Link}
              to="/abt"
              className={`premium-nav-link ${
                isActive("/abt")
                  ? "active"
                  : ""
              }`}
            >

              <span className="nav-icon">
                <FaCircleInfo />
              </span>

              <span>
                About
              </span>

            </Nav.Link>


            {/* CONTACT */}

            <Nav.Link
              as={Link}
              to="/cnt"
              className={`premium-nav-link ${
                isActive("/cnt")
                  ? "active"
                  : ""
              }`}
            >

              <span className="nav-icon">
                <FaPhone />
              </span>

              <span>
                Contact
              </span>

            </Nav.Link>


            {/* ================= STATUS ================= */}

            <div className="system-status">

              <span className="status-indicator"></span>

              <span className="status-text">
                System Online
              </span>

            </div>

          </Nav>

        </Navbar.Collapse>

      </Container>


      {/* Bottom premium line */}

      <div className="navbar-bottom-line"></div>

    </Navbar>
  );
}


/* =========================================================
   PREMIUM NAVBAR CSS
========================================================= */

const style = document.createElement("style");

style.innerHTML = `

/* =====================================================
   MAIN NAVBAR
===================================================== */

.premium-navbar {

  min-height: 72px;

  background:
    linear-gradient(
      135deg,
      #071522 0%,
      #0b1d2d 45%,
      #0e2437 100%
    );

  border-bottom:
    1px solid rgba(255,255,255,0.07);

  box-shadow:
    0 10px 35px rgba(0,0,0,0.28);

  position: relative;

  z-index: 1000;
}


/* =====================================================
   BRAND
===================================================== */

.premium-brand {

  display: flex !important;

  align-items: center;

  gap: 12px;

  margin-right: 35px;

  text-decoration: none !important;

  transition:
    transform .25s ease;
}


.premium-brand:hover {

  transform:
    translateY(-1px);
}


/* =====================================================
   BRAND LOGO
===================================================== */

.brand-logo {

  width: 45px;

  height: 45px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 13px;

  background:
    linear-gradient(
      145deg,
      #1769aa,
      #0d8bb5
    );

  border:
    1px solid rgba(255,255,255,0.18);

  color: #ffffff;

  font-size: 19px;

  box-shadow:
    0 8px 22px rgba(13,139,181,0.28),
    inset 0 1px rgba(255,255,255,0.18);

  transition:
    all .3s ease;
}


.premium-brand:hover .brand-logo {

  transform:
    translateY(-2px);

  box-shadow:
    0 12px 28px rgba(13,139,181,0.38),
    inset 0 1px rgba(255,255,255,0.22);
}


/* =====================================================
   BRAND TEXT
===================================================== */

.brand-details {

  display: flex;

  flex-direction: column;
}


.brand-title {

  color: #ffffff;

  font-size: 17px;

  line-height: 1;

  font-weight: 800;

  letter-spacing: -.25px;
}


.brand-subtitle {

  margin-top: 5px;

  color:
    rgba(180,200,215,0.55);

  font-size: 7px;

  line-height: 1;

  font-weight: 800;

  letter-spacing: 1.7px;
}


/* =====================================================
   NAVIGATION
===================================================== */

.premium-nav {

  gap: 4px;

  padding: 4px 0;
}


/* =====================================================
   NAV LINK
===================================================== */

.premium-nav-link {

  position: relative;

  display: flex !important;

  align-items: center;

  justify-content: center;

  gap: 7px;

  min-height: 40px;

  padding:
    8px 14px !important;

  margin: 0 2px;

  border-radius: 10px;

  color:
    #91a5b5 !important;

  font-size: 12px;

  font-weight: 650;

  text-decoration: none !important;

  transition:
    color .25s ease,
    background .25s ease,
    transform .25s ease,
    box-shadow .25s ease;
}


/* =====================================================
   ICON
===================================================== */

.nav-icon {

  width: 18px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  font-size: 11px;

  color:
    #71889a;

  transition:
    color .25s ease,
    transform .25s ease;
}


/* =====================================================
   HOVER
===================================================== */

.premium-nav-link:hover {

  color:
    #e9f4fa !important;

  background:
    rgba(255,255,255,0.055);

  transform:
    translateY(-1px);
}


.premium-nav-link:hover .nav-icon {

  color:
    #63b7da;

  transform:
    scale(1.08);
}


/* =====================================================
   ACTIVE LINK
===================================================== */

.premium-nav-link.active {

  color:
    #ffffff !important;

  background:
    linear-gradient(
      135deg,
      rgba(30,115,170,0.22),
      rgba(20,95,140,0.12)
    );

  box-shadow:
    inset 0 0 0 1px
    rgba(74,164,204,0.16),

    0 5px 15px
    rgba(0,0,0,0.10);
}


.premium-nav-link.active .nav-icon {

  color:
    #65c1e5;
}


/* Active bottom accent */

.premium-nav-link.active::after {

  content: "";

  position: absolute;

  left: 18px;

  right: 18px;

  bottom: 3px;

  height: 2px;

  border-radius: 10px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #4da9d1,
      transparent
    );

  opacity: .85;
}


/* =====================================================
   SYSTEM STATUS
===================================================== */

.system-status {

  height: 34px;

  display: flex;

  align-items: center;

  gap: 8px;

  margin-left: 13px;

  padding:
    0 12px;

  border-radius: 20px;

  background:
    rgba(34,197,94,0.055);

  border:
    1px solid
    rgba(74,222,128,0.13);

  color:
    #8ee5ad;

  font-size: 9px;

  font-weight: 700;

  white-space: nowrap;

  transition:
    all .25s ease;
}


.system-status:hover {

  background:
    rgba(34,197,94,0.09);

  border-color:
    rgba(74,222,128,0.22);

  transform:
    translateY(-1px);
}


/* =====================================================
   STATUS DOT
===================================================== */

.status-indicator {

  width: 6px;

  height: 6px;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    #32d583;

  box-shadow:
    0 0 0 4px
    rgba(50,213,131,0.09);

  animation:
    statusPulse 2.4s infinite;
}


@keyframes statusPulse {

  0%,
  100% {

    box-shadow:
      0 0 0 4px
      rgba(50,213,131,0.08);
  }

  50% {

    box-shadow:
      0 0 0 6px
      rgba(50,213,131,0.03);
  }
}


/* =====================================================
   BOTTOM GLOW
===================================================== */

.navbar-bottom-line {

  position: absolute;

  left: 0;

  bottom: -1px;

  width: 100%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent 5%,
      rgba(52,145,190,.65),
      rgba(96,165,250,.85),
      rgba(52,145,190,.65),
      transparent 95%
    );

  opacity: .65;
}


/* =====================================================
   MOBILE TOGGLE
===================================================== */

.premium-toggle {

  border:
    1px solid
    rgba(255,255,255,0.14) !important;

  border-radius: 9px !important;

  padding:
    7px 9px !important;

  box-shadow:
    none !important;
}


.premium-toggle:focus {

  box-shadow:
    0 0 0 3px
    rgba(37,99,235,0.12) !important;
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 991px) {

  .premium-navbar {

    min-height: 68px;
  }


  .premium-nav {

    align-items: stretch !important;

    padding:
      12px 0 5px;
  }


  .premium-nav-link {

    justify-content: flex-start;

    margin:
      2px 0;
  }


  .premium-nav-link.active::after {

    left: 14px;

    right: auto;

    width: 25px;

    bottom: 4px;
  }


  .system-status {

    width: fit-content;

    margin:
      10px 0 5px;

  }

}


@media (max-width: 500px) {

  .premium-brand {

    margin-right: 10px;
  }

  .brand-logo {

    width: 41px;

    height: 41px;
  }

  .brand-title {

    font-size: 15px;
  }

  .brand-subtitle {

    font-size: 6px;

    letter-spacing: 1.3px;
  }

}

`;

document.head.appendChild(style);


export default MyNav;