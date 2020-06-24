import Link from "next/link";
import "./NavBar.scss";
import NavButton from "./NavButton";

const NavBar = (props) => (
  <div className={`navbar ${props.isScrolled ? "navbar-scrolled" : ""}`}>
    <div className="navbar-left">
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
    <div className="navbar-mid">
      <NavButton path={"/page1"} label={"page1"} />
      <NavButton path={"/page2"} label={"page2"} />
    </div>
    <div className="navbar-right">
      <Link href="#">
        <a>CTA</a>
      </Link>
    </div>
  </div>
);

export default NavBar;
