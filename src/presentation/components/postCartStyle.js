import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 24,
        overflow: "hidden",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // thêm thuộc tính này để tạo khoảng cách ngang
    },
    header: {
        alignItems: "flex-start",
        flexDirection: "row",
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        color: "white",
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        fontWeight: "500",
        textShadowColor: "rgba(0, 0, 0, 0.60)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        letterSpacing: 0.28,
    },
    postTime: {
        color: "white",
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        fontWeight: "300",
        textShadowColor: "rgba(0, 0, 0, 0.60)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        letterSpacing: 0.28,
    },
    postImage: {
        padding: 12,
        height: 375,
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
    },
    imageStyle: {
        borderRadius: 24,
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%", // sửa lại width để đảm bảo phần tử chiếm 100% chiều rộng của container
    },
    commentSection: {
        alignItems: "center",
        flexDirection: "row",
        padding: 14,
        borderRadius: 14,
        backgroundColor: "rgba(250, 250, 250, 0.65)",
    },
    follow: {
        position: "absolute",
        top: 28,
        left: 28,
    },
    comments: {
        color: "white",
        marginLeft: 5,
    },
    caption: {
        padding: 16,
        
    },
    subActions: {
        flexDirection: "row",
        gap: 10,
    },
});
