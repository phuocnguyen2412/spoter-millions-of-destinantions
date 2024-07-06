import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 24,
    },

    orText: {
        fontSize: 16,
        marginVertical: 16,
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginBottom: 32,
    },
    signUpText: {
        fontSize: 14,
    },
    signUpLink: {
        color: "blue",
        fontWeight: "bold",
    },
});
export default styles;
