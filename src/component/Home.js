import React from "react";
import { Link } from "react-router-dom";
import { navBar } from "./navbar";

function Home() {
  return (
    <div>
      {navBar?.map((item, i) =>
        i > 0 ? (
          <>
            <Link style={item.decoration} to={item.path}>
              {item.title}
            </Link>
            <br />
          </>
        ) : null
      )}
      {/* <Link style={decoration} to="/about">
        About
      </Link>
      <br />
      <Link style={decoration} to="/headTail">
        Head & Tail
      </Link> */}
    </div>
  );
}

export default Home;
