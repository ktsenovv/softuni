async function getInfo() {
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    const stopId = document.getElementById('stopId').value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        stopName.textContent = 'Loading...';
        buses.replaceChildren();
        
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('Stop ID not found');
        }

        const data = await res.json();

        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(([bus, ariveTime]) => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${ariveTime} minutes`;

            
            buses.appendChild(liElement);
        });
    } catch (error) {
        stopName.textContent = 'Error';
    }
}