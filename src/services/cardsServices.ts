export async function getYugiCards() {
    try {
        const res = await fetch(`https://db.ygoprodeck.com/api/v7/randomcard.php`)
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function getYugiCardsList() {
    try {
        const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardsets.php`)
            .then((res) => res.json())
            .catch((err) => err);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function getPokeCards() {
    try {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards`, {
            headers: {
                'X-Api-Key': '95dbf7f6-2cb1-4891-b5eb-94fe623406f9'
            }
        })
            .then((res) => res.json())
            .catch((err) => err);
        return res.data
    } catch (error) {
        console.log(error);
    }
}