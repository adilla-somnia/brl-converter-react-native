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
            flagHome: `https://raw.githubusercontent.com/lipis/flag-icons/refs/heads/main/flags/1x1/br.svg`,
            flagAway: "https://raw.githubusercontent.com/lipis/flag-icons/refs/heads/main/flags/1x1/us.svg",
            currentTime: data.USD.create_date
        },
        EUR: {
            name: data.EUR.name,
            code: data.EUR.code,
            variation: data.EUR.varBid,
            bid: data.EUR.bid,
            flagHome: `https://raw.githubusercontent.com/lipis/flag-icons/refs/heads/main/flags/1x1/br.svg`,
            flagAway: "https://raw.githubusercontent.com/lipis/flag-icons/refs/heads/main/flags/1x1/gb.svg",
            currentTime: data.EUR.create_date
        },
    };
};