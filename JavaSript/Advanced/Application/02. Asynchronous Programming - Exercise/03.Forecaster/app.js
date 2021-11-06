function attachEvents() {
    document.getElementById('submit').addEventListener('click', getForecast);
}

attachEvents();

async function getForecast(event) {
    function clearElements() {
        document.querySelectorAll('.forecasts').forEach(e => e.remove());
        document.querySelectorAll('.forecast-info').forEach(e => e.remove());
    }
    clearElements();

    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    const currentLabelElement = document.querySelector('#current .label');
    const upcomingElement = document.getElementById('upcoming');
    const upcomingLabelElement = document.querySelector('#upcoming .label');
    const locationName = document.getElementById('location').value;
    const button = event.target;

    forecastElement.style.display = 'block';

    const conditionSymbol = {
        'Sunny': '\u2600',
        'Partly sunny': '\u26C5',
        'Overcast': '\u2601',
        'Rain': '\u2614'
    }

    const urlLocations = 'http://localhost:3030/jsonstore/forecaster/locations';
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/`;
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

    try {
        upcomingElement.style.display = 'block';
        currentLabelElement.textContent = 'Loading...';
        upcomingLabelElement.textContent = 'Loading...';
        button.value = 'Loading...';
        button.disabled = true;

        const locations = await getData(urlLocations);

        currentLabelElement.textContent = 'Current conditions';
        upcomingLabelElement.textContent = 'Three-day forecast';
        button.value = 'Get Weather';
        button.disabled = false;

        const currentLocation = locations.find(l => l.name == locationName);
        const [current, upcoming] = await Promise.all([
            getData(urlToday + currentLocation.code),
            getData(urlUpcoming + currentLocation.code)
        ]);

        const currentContent = createElement('div', { className: 'forecasts' }, {},
            createElement('span', { className: 'condition symbol' }, {}, conditionSymbol[current.forecast.condition]),
            createElement('span', { className: 'condition' }, {},
                createElement('span', { className: 'forecast-data' }, {}, current.name),
                createElement('span', { className: 'forecast-data' }, {}, `${current.forecast.low}\u00B0/${current.forecast.high}\u00B0`),
                createElement('span', { className: 'forecast-data' }, {}, `${current.forecast.condition}`),
            )
        );

        const upcomingContent = createElement('div', { className: 'forecast-info' }, {});
        upcoming.forecast.forEach(day => {
            const el = createElement('span', { className: 'upcoming' }, {},
                createElement('span', { className: 'symbol' }, {}, conditionSymbol[day.condition]),
                createElement('span', { className: 'forecast-data' }, {}, `${day.low}\u00B0/${day.high}\u00B0`),
                createElement('span', { className: 'forecast-data' }, {}, day.condition),
            );
            upcomingContent.appendChild(el);
        });

        clearElements();
        currentElement.appendChild(currentContent);
        upcomingElement.appendChild(upcomingContent);
    } catch (error) {
        upcomingElement.style.display = 'none';
        currentLabelElement.textContent = 'Error';
    }
}

async function getData(url) {
    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error();
        }

        return await res.json();
    } catch (error) {
        return error;
    }
}

function createElement(type, properties, evnt, ...content) {
    const element = document.createElement(type);

    for (let prop in properties) {
        if (typeof (properties[prop]) == 'object') {
            for (let propp in properties[prop]) {
                element[prop][propp] = properties[prop][propp];
            }
        } else {
            element[prop] = properties[prop];
        }
    }

    for (let entry of content) {
        if (typeof (entry) == 'string' || typeof (entry) == 'number') {
            entry = document.createTextNode(entry);
        }
        element.appendChild(entry);
    }

    if (typeof (evnt) == 'object' && Object.keys(evnt).length !== 0) {
        element.addEventListener(evnt.type, evnt.func)
    }

    return element;
}