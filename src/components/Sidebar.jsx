import { useEffect, useRef, useState } from "react";
import { List, XCircleFill } from "react-bootstrap-icons"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const navbarItems = navbarRef.current.children;

      for (let i = 0; i < navbarItems.length; i++) {
        const item = navbarItems[i];
        const itemTop = item.offsetTop;
        const itemBottom = itemTop + item.offsetHeight;
        const isVisible = (itemBottom >= window.scrollY) && (itemTop <= window.scrollY + window.innerHeight);

        if (isVisible) {
          const navbarItem = navbarRef.current.querySelector(`[data-navbar-item="${i}"]`);
          navbarItem.classList.add('active');
        } else {
          const navbarItem = navbarRef.current.querySelector(`[data-navbar-item="${i}"]`);
          navbarItem.classList.remove('active');
        }
      }
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])


  return (
    <>
      <List className="mobile-nav-toggle d-xl-none" />
      <XCircleFill className="mobile-nav-toggle" />

      <header id="header" className="d-flex flex-column justify-content-center">

        <nav id="navbar" className="navbar nav-menu">
          <ul ref={navbarRef}>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a>
            </li>
            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default Sidebar;