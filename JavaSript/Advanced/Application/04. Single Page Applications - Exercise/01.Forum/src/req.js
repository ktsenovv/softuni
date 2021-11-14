export async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}