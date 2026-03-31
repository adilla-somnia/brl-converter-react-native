import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Snackbar, Surface, Button, Appbar } from "react-native-paper";
import { styles } from "../styles/root";
import { useEffect, useState } from "react";
import CurrencyCard from "../components/CurrencyCard";
import { getCurrencies } from "../services/api";

export default function HomeScreen() {
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [currencies, setCurrencies] = useState([]);
    const [currentTime, setCurrentTime] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            let now = new Date();
            console.log(now.getHours());

            let hours = now.getHours();
            let minutes = now.getMinutes();
            console.log(hours, minutes);
            let hoursMinutes = `${hours}:${minutes}`;
            console.log(hoursMinutes);
            setCurrentTime(hoursMinutes);
            console.log(currentTime);


            // Simulate fetching data
            const data = await getCurrencies();
            setCurrencies(data);
            if (data["USD"].currentTime == currentTime) {
                setLoading(false);
                setSnackbarMessage("Cotações já estão atualizadas!");
                onToggleSnackBar();
                return;

            }

            // console.log(data["USD"].currentTime)
            // console.log(data);
            setLoading(false);
            setSnackbarMessage("Cotações atualizadas!")
            onToggleSnackBar();

        } catch (error) {
            setLoading(false);
            setSnackbarMessage("Erro ao atualizar cotações!");
            onToggleSnackBar();
        }

    };

    useEffect(() => {
        onToggleSnackBar();
        setSnackbarMessage("Login realizado com sucesso!");
        fetchData();

    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} >
                <SafeAreaView style={{ padding: 28, paddingBottom: 62, backgroundColor: "#6750a4", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, alignItems: "center", position: "absolute", width: "100%" }} >

                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Conversor de</Text>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Moedas <Text style={{ color: '#f0a608' }}>Pro</Text></Text>

                </SafeAreaView>

                <SafeAreaView style={{ marginTop: 100, display: "flex", flexDirection: "column", gap: 16, marginLeft: 15, marginRight: 15, justifyContent: "space-between" }} >


                    <Surface style={{ padding: 10, borderRadius: 8, elevation: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>

                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Cotação Atual</Text>
                        <Text style={{ fontSize: 13, color: 'gray' }}> Última Atualização: {currentTime ? `${currentTime}` : "..."} </Text>
                    </Surface>

                    {Object.keys(currencies).length > 0 ? (
                        Object.values(currencies).map((currency) => (
                            <CurrencyCard
                                code={currency.code}
                                variation={currency.variation}
                                bid={currency.bid}
                                flagHome={currency.flagHome}
                                flagAway={currency.flagAway}
                                key={currency.code}
                                name={currency.name} />
                        )
                        )
                    ) : (
                        <Text>Carregando cotações...</Text>
                    )}



                    <Button
                        style={{ marginTop: 80 }}
                        mode="contained"
                        disabled={loading}
                        onPress={async () => (fetchData(), setLoading(true), setTimeout(() => setLoading(false), 2000))}
                        loading={loading}
                    >

                        <Text style={{ color: 'white' }}> Atualizar Cotações </Text>

                    </Button>
                </SafeAreaView>

            </SafeAreaView>






            <Appbar style={{ position: "absolute", left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "row", justifyContent: "space-around" }} >
                <Appbar.Action icon="home" onPress={() => { }} />
                <Appbar.Action icon="currency-usd" onPress={() => { }} />
                <Appbar.Action icon="cog" onPress={() => { }} />
            </Appbar>



            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                elevation={5}
                duration={1900}
                action={{
                    label: 'Fechar',
                    onPress: () => {
                        onDismissSnackBar();
                    },
                }}
            >
                {snackbarMessage}
            </Snackbar>


        </SafeAreaView>
    );
}