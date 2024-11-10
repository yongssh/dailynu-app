import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Latest Stories' }} // Custom title for the Home Screen
        />

        {/* Article Screen */}
        <Stack.Screen
          name="ArticleScreen"
          component={ArticleScreen}
          options={{ title: 'Full Article' }} // Custom title for the Article Screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
