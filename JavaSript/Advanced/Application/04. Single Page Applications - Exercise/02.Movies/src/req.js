export async function request(url, options, rtrn = true) {
    try {
        const response = await fetch(url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (rtrn) {
            return await response.json();
        }
    } catch (err) {
        alert(err.message);
    }
}