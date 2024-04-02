import HomeScreen from '@modules/home/views/HomeScreen';
import NotificationScreen from '@modules/notification/views/NotificationScreen';
import QRScreen from '@modules/qr/views/QRScreen';
import SearchScreen from '@modules/search/views/SearchScreen';
import SettingsScreen from '@modules/setting/views/SettingsScreen';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '@navigation/typings';
import React from 'react';
import MyTabBar from '../src/components/MyTab';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainScreen() {
  const renderTabBar = (props: BottomTabBarProps) => {
    return <MyTabBar {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="QR" component={QRScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
