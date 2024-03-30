import React from "react";
import { Image, SafeAreaView, View, Text, StyleSheet } from "react-native";

const Chatbox = ({ name, message, time }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/favicon.png")} style={styles.image} />
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    //top: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
  },
  messageContainer: {
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  message: {
    fontSize: 14,
    color: "#555",
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
});

export default Chatbox;
