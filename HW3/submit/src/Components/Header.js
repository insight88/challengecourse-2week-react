import React from "react";
import { Link } from "react-router-dom"

export default () => (
  <header>
    <ul>
      <li>
        <Link href="/prices">Prices</Link>
      </li>
      <li>
        <Link href="/exchanges">Exchanges</Link>
      </li>
      <li>
        <Link href="/coins">Coins</Link>
      </li>
    </ul>
  </header>
);
