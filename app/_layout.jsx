import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#fce0d5" },
        headerTintColor: "#0000",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          fontFamily: "Ubuntu",
        },
        contentStyle: {
          backgroundColor: "#fff",
        },
        animation: "fade_from_bottom",
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
      
    </Stack>
  );
}
