import React from "react";
import Nav from "../../components/Nav";
import AddNew from '../../components/AddNew';

export default function Login() {
  return (
    <div>
      <Nav />
      <h1>This is Login</h1>
      <AddNew type="savings"/>
    </div>
  );
}
