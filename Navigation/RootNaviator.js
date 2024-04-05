import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactScreen from "../Screens/ContactScreen";
import AddContacts from "../Screens/AddContacts";
import Profile from "../Screens/Profile";



const Stack = createNativeStackNavigator();



export default function RootNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="ContactScreen" component={ContactScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="AddContacts" component={AddContacts} options={{headerShown: false}} /> 
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}