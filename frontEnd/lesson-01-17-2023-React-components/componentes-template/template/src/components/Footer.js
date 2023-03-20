import React from "react";
import { RedesSociais } from "./Redessociais";
import { Copywrite } from "./Copywrite";
import logo from "../img/logo.png";

export function Footer() {
  return (
    <div className="footer">
      <div>
        <RedesSociais />
      </div>
      <div>
        <Copywrite />
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  );
}
