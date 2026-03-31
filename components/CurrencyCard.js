import { Surface, Text } from "react-native-paper";
import FlagsIcon from "./FlagsIcon";
import { SafeAreaView } from "react-native-safe-area-context";



export default function CurrencyCard({ code, name, variation, bid, flagHome, flagAway }) {
    const variationFormatted = parseFloat(variation * 100).toFixed(2);
    const bidFormatted = parseFloat(bid).toFixed(2);
    const tagFormatted = `1 ${name.slice(0, -16)}`;
    const colorVariation = variation >= 0 ? "green" : "red";
    const arrow = variation >= 0 ? "▲" : "▼";

    return (
        <Surface style={{ padding: 10, paddingBottom: 15, borderRadius: 8, elevation: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <SafeAreaView style={{ width: '15%', justifyContent: 'center' }} >
                <FlagsIcon flagHome={flagHome} flagAway={flagAway} />
            </SafeAreaView>
            <SafeAreaView>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{code} / BRL</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>{tagFormatted}</Text>
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 'auto', alignItems: 'flex-end' }} >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>R${bidFormatted}</Text>
                <Text style={{ fontSize: 13, color: colorVariation }}>{arrow} {Math.abs(variationFormatted)}%</Text>
            </SafeAreaView>
        </Surface>
    );
}