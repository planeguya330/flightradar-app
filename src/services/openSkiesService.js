// openSkiesService.js

/**
 * Fetches aircraft data from the OpenSkies Network.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<Object>} - A promise that resolves to the aircraft data.
 */
async function fetchAircraftData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
}

module.exports = {
    fetchAircraftData,
};
