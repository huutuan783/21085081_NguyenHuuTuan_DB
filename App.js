import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Screen_dangnhap from "./screens/Screen_dangnhap";
import Screen_giaodien from "./screens/Screen_giaodien";
import Screen_dangky from "./screens/Screen_dangky"
import Screen_profile from "./screens/Screen_profile";
import Screen_updateprofile from "./screens/Screen_updateprofile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Screen_dangnhap"screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Screen_dangnhap" component={Screen_dangnhap} />
            <Stack.Screen name="Screen_giaodien" component={Screen_giaodien} />
            <Stack.Screen name="Screen_dangky" component={Screen_dangky} />
            <Stack.Screen name="Screen_profile" component={Screen_profile} />
            <Stack.Screen name="Screen_updateprofile" component={Screen_updateprofile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
