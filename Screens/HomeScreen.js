import React from "react";
import { FlatList, View, Text } from "react-native";
import Chatbox from "./Chatbox";

const renderChatItem = ({ item }) => {
  const { name, message, time } = item;
  return <Chatbox name={name} message={message} time={time} />;
};

const data = [
  {
    id: 1,
    name: "Tom Holland",
    message: "i'll see you soon...",
    time: "Yesterday",
  },
  {
    id: 2,
    name: "Tommy Shelby",
    message: "i'll see you soon...",
    time: "Today",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    message: "i'll see you soon...",
    time: "3 days ago",
  },
  {
    id: 4,
    name: "Elon Musk",
    message: "i'll see you soon...",
    time: "Yesterday",
  },
  // ... Add more chat items as needed
];

export default function HomeScreen() {
  return (
    <FlatList
      data={data}
      renderItem={renderChatItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
