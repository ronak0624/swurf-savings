import React from 'react';
import AddNew from '../../components/AddNew';
import Nav from '../../components/Nav'
import SavingsCard from '../../components/SavingsCard'

export default function Savings() {

    return (
        <div>
            < Nav />
            <h1>This is savings</h1>
            <AddNew type="savings"/>
            <SavingsCard />
        </div>
    )
}
