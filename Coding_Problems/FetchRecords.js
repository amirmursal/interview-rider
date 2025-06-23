

/**
 * Create a fetch function to fetch the records from api
 * https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
 */

async function getRecords(page = 1) {
    const offset = (page - 1) * 20;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);

    const data = await response.json();

    return data.results;
}

getRecords(3).then((result) => console.log(result));