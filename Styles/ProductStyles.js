import { StyleSheet } from "react-native";
const ProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerRows:{
    flex: 1, flexDirection: "row" 
  },
  w300:{
    width: 300, height: 20
  },
  mV:{
    marginVertical: 10
  },
  mB:{
    marginBottom: 10
  },
  pv10:{
    paddingVertical: 10
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "95%",
    aspectRatio: 0.7,
    height: 300,
  },
  cardTextPosition: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 50,
    height: 20,
    backgroundColor: "#fde8e8",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTextStyle: {
    fontSize: 9,
    color: "#000",
    fontWeight: "bold",
  },
  cardOfferInnerContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    width: 50,
    height: 20,
    backgroundColor: "#fde8e8",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#e93347",
    borderRadius: 5,
  },
  cardOfferTextStyle: {
    fontSize: 12,
    color: "#e93347",
    fontWeight: "bold",
  },
  watchListIconStyle: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 50,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  h100: {
    height: 100,
  },
  h65: {
    height: 65,
  },
  titleTextStyle: {
    color: "#000",
    fontWeight: "bold",
  },
  containerRow: {
    flexDirection: "row",
  },
  containerCurrencyText: {
    fontSize: 14,
    color: "#e93347",
  },
  currencyTextStyle: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#000",
    marginLeft: 10,
  },
  containerPosition: {
    width: 150,
    height: 25,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
  },
  priceTag: {
    width: 10,
    height: 10,
    tintColor: "#ffd331",
  },
  offerText: {
    fontSize: 9,
    color: "#ffd331",
    fontWeight: "bold",
    marginLeft: 3,
  },
  addCartContainer:{
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 30,
  },
  addCartButtonname:{
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
    marginLeft: 3,
  },
  mT30:{
    marginTop:30
  },
  skeletonLoadderitem:{
    width: 350,
          height: 150,
          marginVertical: 10,
          marginHorizontal: 30,
  }
});
export default ProductStyles;
