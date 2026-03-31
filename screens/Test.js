import { Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Test() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Text>Hello, World!</Text>
        </SafeAreaView>
    );
}