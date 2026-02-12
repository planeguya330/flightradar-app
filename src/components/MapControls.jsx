import React, { useState } from 'react';

const MapControls = () => {
    const [mapType, setMapType] = useState('road');

    const handleMapTypeChange = (event) => {
        setMapType(event.target.value);
        // Implement functionality to update the map based on the selected type
    };

    return (
        <div>
            <label htmlFor="map-type-selector">Select Map Type:</label>
            <select id="map-type-selector" value={mapType} onChange={handleMapTypeChange}>
                <option value="road">Road</option>
                <option value="satellite">Satellite</option>
                <option value="hybrid">Hybrid</option>
            </select>
        </div>
    );
};

export default MapControls;