import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStarted from './pages/get-started-page/getStarted';
import LoginScreen from './pages/login-page/login';
import SignupScreen from './pages/sign-up-page/signUp';
import VerificationEmail from './pages/forget-password-pages/verificationEmail';
import VerificationCodeScreen from './pages/forget-password-pages/verificationCode';
import PasswordForm from './pages/forget-password-pages/createPassword';
import ConfirmPasswordScreen from './pages/forget-password-pages/confirmPassword';
import HomeScreen from './pages/home-page/home';
import SettingsScreen from './pages/settings-page/settingScreen';
import UpdateBudget from './pages/update-budget-page/updateBudget';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/home.png')}
              style={{ width: 40, height: 40, marginTop: 15 }}
            />
          ),
          tabBarLabel: '', // Remove label for Home
        }}
      />
      <Tab.Screen
        name="Update Budget"
        component={UpdateBudget}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/updatebudget.png')}
              style={{ width: 60, height: 60,  marginTop: 10  }}
            />
          ),
          tabBarLabel: '', // Remove label for Update Budget
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/settings.png')}
              style={{ width: 40, height: 40, marginTop: 15  }}
            />
          ),
          tabBarLabel: '', // Remove label for Settings
        }}
      />

      {/* <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Update Budget" component={UpdateBudget}options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingsScreen}options={{ headerShown: false }} /> */}


      {/* <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Update Budget" component={UpdateBudget}options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingsScreen}options={{ headerShown: false }} /> */}

    </Tab.Navigator>
  );
};

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='GET STARTED' component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="LOG IN" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SIGN UP" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Verification Email" component={VerificationEmail} options={{ headerShown: false }} />
      <Stack.Screen name="CODE" component={VerificationCodeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='CREATEPW' component={PasswordForm} options={{ headerShown: false }} />
      <Stack.Screen name='CONFIRMPW' component={ConfirmPasswordScreen} options={{ headerShown: false }} />  
      <Stack.Screen name="HOMESCREEN" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

export default App;
