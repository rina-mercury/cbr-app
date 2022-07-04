import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#ccc",
    flex: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  emptyText: {
    fontSize: 30,
    textAlign: "center",
    opacity: 0.5,
    fontWeight: "300",
    color: "#eee",
  },
  topBlock: {
    height: 100,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  circle: { width: 20, height: 20, borderRadius: 50 },
  container: { marginHorizontal: 16 },
});

export default styles;
