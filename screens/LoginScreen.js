import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "../services/auth";
import { styles, loginStyles } from "../styles/root";
import { Button, Snackbar, Text, TextInput } from "react-native-paper";
import { Pressable } from "react-native";
import { useEffect, useState } from "react";
import { validateEmail } from "../validation/inputValidation";



function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const [loading, setLoading] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleLogin = async () => {

        if (loading) return; // Prevent multiple clicks
        setLoading(true);
        setSnackbarMessage("");

        setErrorEmail(false);
        setErrorPassword(false);

        if (!email && !password) {
            setErrorEmail(true);
            setErrorPassword(true);
            onToggleSnackBar();
            setSnackbarMessage("Preencha todos os campos!");
            setLoading(false);
            return;
        } else if (!email) {
            setErrorEmail(true);
            onToggleSnackBar();
            setSnackbarMessage("O email é obrigatório!");
            setLoading(false);
            return;
        } else if (!validateEmail(email)) {
            setErrorEmail(true);
            onToggleSnackBar();
            setSnackbarMessage("O email é inválido!");
            setLoading(false);
            return;
        } else if (!password) {
            setErrorPassword(true);
            onToggleSnackBar();
            setSnackbarMessage("A senha é obrigatória!");
            setLoading(false);
            return;
        }

        try {
            await login(email, password);
            setLoading(false);
            setEmail("");
            setPassword("");
            navigation.navigate("Home");
        } catch (error) {
            onToggleSnackBar();
            setSnackbarMessage(error.message);
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <SafeAreaView style={loginStyles.formContainer}>

                <TextInput
                    value={email}
                    mode="outlined"
                    label="Email"
                    onChangeText={(email) => setEmail(email)}
                    error={errorEmail}
                ></TextInput>
                <TextInput
                    value={password}
                    mode="outlined"
                    label="Senha"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password)}
                    error={errorPassword}
                ></TextInput>

            </SafeAreaView>

            <SafeAreaView style={loginStyles.btnContainer}>
                <Button
                    disabled={loading}
                    onPress={handleLogin}
                    mode="contained-tonal"
                    loading={loading}
                >
                    Entrar
                </Button>

                <Button onPress={() => navigation.navigate("Register")} mode="contained">
                    Cadastro
                </Button>

            </SafeAreaView>

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

export default LoginScreen;