
export default async function fetchAppartements(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('No data to fetch');
    }
    return await response.json();
}
