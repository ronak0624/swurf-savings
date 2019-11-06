import React from "react";
import AddNew from "../../components/AddNew";
import Nav from '../../components/Nav'
import ShiftCard from '../../components/ShiftCard'

export default function Shifts() {
  return (
    <div>
        <Nav />
      <h1>This is shift</h1>
      <AddNew type="shift"/>
      <ShiftCard />
    </div>
  );
}
