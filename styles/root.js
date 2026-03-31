import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boldText: {
        fontWeight: 400,
    },
});

export const loginStyles = StyleSheet.create({
    btnContainer: {
        flexDirection: "column",
        width: '50%',
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        gap: 10,
        marginTop: 20,
        paddingTop: 16
    },
    formContainer: {
        width: '80%',
        alignSelf: "center",
        gap: 10,
        marginTop: 20,
        gap: 20,
        paddingTop: 20
    },
});