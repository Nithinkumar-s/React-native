import { Stack } from "expo-router";
import { View, StyleSheet } from 'react-native';

export default function Rootlayout() { 
  return  <Stack screenOptions={{headerShown: false}} >
    <Stack.Screen name="(tabs)" />
  </Stack>
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Set your desired background color
    },
  });