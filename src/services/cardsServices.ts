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
            console.log(res)
        return res;
    } catch (error) {
        console.log(error);
    }
}