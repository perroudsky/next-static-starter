import Link from "next/link";
import { withRouter } from "next/router";

import "./NavButton.scss";

const NavButton = (props) => (
  <Link href={props.path}>
    <div
      className={`nav-button ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <p className="label">{props.label}</p>
    </div>
  </Link>
);

export default withRouter(NavButton);
