import React, { Component } from 'react'

export default class SavingsCard extends Component {
    render() {
        return (
            <div className="card mb-5">
                <div className="card-header">Emergency Fund</div>
                <div className="progress">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}
