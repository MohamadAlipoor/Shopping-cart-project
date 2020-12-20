import React from "react";
import { Navbar, NavbarBrand, Badge } from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div style={{ direction: "rtl" }}>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">سبد خرید</NavbarBrand>
          <Badge color="info" pill className="m-2">
            {this.props.totalCounters}
          </Badge>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
