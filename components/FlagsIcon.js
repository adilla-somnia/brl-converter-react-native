import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function FlagsIcon({ flagHome, flagAway }) {
    //console.log("FlagsIcon props:", { flagHome, flagAway }); // Debugging log

    return (
        <SafeAreaView style={{ flexDirection: "row", alignItems: "center", display: 'flex', justifyContent: 'center', alignContent: 'center' }} >

            <SafeAreaView style={{ flexDirection: "row", alignItems: "center", display: 'contents', justifyContent: 'center', margin: 0, padding: 0 }} >
                {flagAway === "gb" ? (
                    <Image
                        style={{ width: 32, height: 32, borderRadius: "50%", position: 'absolute', left: -25, top: -25 }}
                        source={require('../images/gb.png')}
                    />
                ) : <Image
                    style={{ width: 32, height: 32, borderRadius: "50%", position: 'absolute', left: -25, top: -25 }}
                    source={require('../images/us.png')}
                />}

                <Image
                    source={require('../images/br.png')}
                    style={{ width: 32, height: 32, marginRight: 8, borderRadius: "50%", position: 'absolute', left: -10, top: -10 }}
                />

            </SafeAreaView>


        </SafeAreaView>
    );
}