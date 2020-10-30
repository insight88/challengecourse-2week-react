import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  margin: 30px 20px 30px 0;
  font-size: 20px;
  background-color: ${(props) => (props.current ? "#f0932b" : "transparent")};
  color: ${(props) => (props.current ? "white" : "black")};
`;

export default withRouter(({ location: { pathname } }) => (
  <header>
    <Ul>
      <Li current={pathname === "/"}>
        <Link to="/">Prices</Link>
      </Li>
      <Li current={pathname === "/exchanges"}>
        <Link to="/exchanges">Exchanges</Link>
      </Li>
      <Li current={pathname === "/coins"}>
        <Link to="/coins">Coins</Link>
      </Li>
    </Ul>
  </header>
));
