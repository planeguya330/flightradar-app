import React from 'react';

const AircraftDetails = ({ aircraft }) => {
    return (
        <div className="aircraft-details">
            <h2>{aircraft.name} Details</h2>
            <p><strong>Model:</strong> {aircraft.model}</p>
            <p><strong>Airline:</strong> {aircraft.airline}</p>
            <p><strong>Registration:</strong> {aircraft.registration}</p>
            <p><strong>Status:</strong> {aircraft.status}</p>
        </div>
    );
};

export default AircraftDetails;
