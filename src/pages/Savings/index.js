import React, { Component } from 'react';
import NewSavings from '../../components/NewSavings'
import SavingsCard from '../../components/SavingsCard'
import Container from 'react-bootstrap/Container'
import API from '../../utils/API';

export default class Savings extends Component {
  state = {
    savings: []
  }

  componentDidMount() {
    this.loadSavings();
  }

  loadSavings = () => {
    API.findAllSavingGoals(sessionStorage.user)
      .then(res => {
          this.setState({ savings: res.data })
          console.log(this.state.savings);
        }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <NewSavings />
        {this.state.savings.length ? (
          this.state.savings.map(saving => (
            <SavingsCard
              priority={saving.priority}
              title={saving.title}
              price={saving.price}
              priceRemaining={saving.price_remaining} />
          ))
        ) : (
            <h3 className="text-center">No goals yet!</h3>
          )}
      </Container>
    )
  }