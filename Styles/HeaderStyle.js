import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({

    container: {
        height: 80,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row",
        marginTop: 20,
        borderBottomWidth: 0.5,
    },
    row: {
     flexDirection:'row'
    },
    title: {
        fontSize: 24, color: "#000", fontWeight: "bold" 
    },
    studiosCenter: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    lanText:{
        fontSize: 12, color: "#000", fontWeight: "bold" 
    },
    textContainer:{
        fontSize: 12,
        color: "#000",
        fontWeight: "bold",
        marginLeft: -2,
    },
    bagImage:{
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        position: "relative",
    },
    imageContainer:{
        width: 30, height: 30
    },
    cardRounder:{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: "#e93347",
        bottom: 2,
        right: -5,
    },
    cardText:{
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: -2,
    }
});
  export {HeaderStyle}