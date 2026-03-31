import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function FlagsIcon({ flagHome, flagAway }) {
    return (
        <SafeAreaView style={{ flexDirection: "row", alignItems: "center", gap: 8 }} >
            <Image
                source={{ uri: flagAway }}
                style={{ width: 32, height: 32, marginRight: 8, borderRadius: "50%" }}
            />
            <Image
                source={{ uri: flagHome }}
                style={{ width: 32, height: 32, borderRadius: "50%", position: "absolute", left: 16, top: 16 }}
            />
        </SafeAreaView>
    );
}