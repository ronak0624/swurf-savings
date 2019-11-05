import React from 'react';

export default function SavingsCard(props) {
    return (
        <div className="card mb-5">
                <div className="card-header">{props.title}</div>
                <div className="progress">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
    )
}
