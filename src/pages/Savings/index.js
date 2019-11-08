import React from 'react';
import NewSavings from '../../components/NewSavings'
import SavingsCard from '../../components/SavingsCard'
import Container from 'react-bootstrap/Container'

var mockData = [
    {
      title: 'New Skis',
      price: 229,
      priceRemaining: 134,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 328,
      priceRemaining: 52,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 779,
      priceRemaining: 68,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 310,
      priceRemaining: 73,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 375,
      priceRemaining: 175,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 602,
      priceRemaining: 201,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 249,
      priceRemaining: 161,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 274,
      priceRemaining: 142,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 264,
      priceRemaining: 177,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 824,
      priceRemaining: 249,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 384,
      priceRemaining: 157,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 433,
      priceRemaining: 259,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 99,
      priceRemaining: 31,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 351,
      priceRemaining: 4,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 381,
      priceRemaining: 39,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 459,
      priceRemaining: 157,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 738,
      priceRemaining: 261,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 287,
      priceRemaining: 220,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 927,
      priceRemaining: 378,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 201,
      priceRemaining: 43,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 748,
      priceRemaining: 184,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 86,
      priceRemaining: 27,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 793,
      priceRemaining: 308,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 510,
      priceRemaining: 256,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 313,
      priceRemaining: 9,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 370,
      priceRemaining: 218,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 280,
      priceRemaining: 152,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 669,
      priceRemaining: 279,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 381,
      priceRemaining: 102,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 983,
      priceRemaining: 391,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 241,
      priceRemaining: 124,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 268,
      priceRemaining: 35,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 843,
      priceRemaining: 112,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 190,
      priceRemaining: 105,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 103,
      priceRemaining: 68,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 596,
      priceRemaining: 19,
      priority: 3,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 398,
      priceRemaining: 379,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 258,
      priceRemaining: 247,
      priority: 1,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 420,
      priceRemaining: 82,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    },
    {
      title: 'New Skis',
      price: 265,
      priceRemaining: 191,
      priority: 2,
      timeCreated: 11,
      achieved: false,
      isDeleted: false
    }
  ]

function SavingsList(){
    return (
        mockData.map((shift) => (
            <SavingsCard title={shift.title} price={shift.price} priceRemaining={shift.priceRemaining} />
        ))
    )
}

export default function Savings() {
    return(
        <Container>
            <NewSavings />
            <SavingsList />
        </Container>
    )
}
