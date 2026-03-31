import { register } from "../services/auth";
import { loginStyles, styles } from "../styles/root";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Snackbar, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { validateEmail, validatePassword } from "../validation/inputValidation";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);


    const handleRegister = async () => {

        if (loading) return; // Prevent multiple clicks
        setLoading(true);

        setErrorConfirmPassword(false);
        setErrorPassword(false);
        setErrorEmail(false);
        setSnackbarMessage("");



        if (!email && !password && !confirmPassword) {
            setErrorEmail(true);
            setErrorPassword(true);
            setErrorConfirmPassword(true);
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
        }
        else if (!password) {
            setErrorPassword(true);
            onToggleSnackBar();
            setSnackbarMessage("A senha é obrigatória!");
            setLoading(false);
            return;
        } else if (!validatePassword(password)) {
            setErrorPassword(true);
            onToggleSnackBar();
            setSnackbarMessage("A senha deve ter pelo menos 6 caracteres!");
            setLoading(false);
            return;
        } else if (!confirmPassword) {
            setErrorConfirmPassword(true);
            onToggleSnackBar();
            setSnackbarMessage("Confirme sua senha!");
            setLoading(false);
            return;
        } else if (password !== confirmPassword) {
            setErrorPassword(true);
            onToggleSnackBar();
            setErrorConfirmPassword(true);
            setSnackbarMessage("As senhas não coincidem!");
            setLoading(false);
            return;
        }

        try {
            await register(email, password);
            setLoading(false);
            onToggleSnackBar();
            setSnackbarMessage("Usuário registrado com sucesso!");
            navigation.navigate("Login");
        } catch (error) {
            setLoading(false);
            onToggleSnackBar();
            setSnackbarMessage(error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <SafeAreaView style={loginStyles.formContainer}>

                <TextInput
                    mode="outlined"
                    label="Email"
                    onChangeText={(email) => setEmail(email)}
                    error={errorEmail}
                ></TextInput>


                <TextInput
                    mode="outlined"
                    label="Senha"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password)}
                    error={errorPassword}
                ></TextInput>

                <TextInput
                    mode="outlined"
                    label="Confirmar Senha"
                    secureTextEntry
                    onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                    error={errorConfirmPassword || errorPassword}
                ></TextInput>

                <SafeAreaView style={loginStyles.btnContainer}>
                    <Button
                        className={`${loading ? "loading" : ""}`}
                        disabled={loading}
                        mode="contained"
                        onPress={handleRegister}
                    >
                        {loading ? <span className="spinner"></span> : "Criar Conta"}
                    </Button>
                </SafeAreaView>

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