export const getCurrencies = async () => {
    const response = await fetch(
        "https://economia.awesomeapi.com.br/json/all"
    );
    const data = await response.json();

    return {
        USD: {
            name: data.USD.name,
            code: data.USD.code,
            variation: data.USD.varBid,
            bid: data.USD.bid,
            flagHome: `br`,
            flagAway: "us",
            currentTime: data.USD.create_date
        },
        EUR: {
            name: data.EUR.name,
            code: data.EUR.code,
            variation: data.EUR.varBid,
            bid: data.EUR.bid,
            flagHome: `br`,
            flagAway: "gb",
            currentTime: data.EUR.create_date
        },
    };
};