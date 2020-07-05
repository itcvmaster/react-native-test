import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import UserList from '../screens/UserList';
import UserDetail from '../screens/UserDetail';
import ImageList from '../screens/ImageList';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserDetail" options={{ headerShown: false }} >
        {() => <Stack.Navigator mode="modal">
          <Stack.Screen name="UserDetail" component={UserDetail} />
          <Stack.Screen name="ImageList" component={ImageList}  options={{ headerShown: false }} />
        </Stack.Navigator>}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
