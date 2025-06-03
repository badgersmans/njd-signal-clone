import ChatListItem from '@/components/ChatListItem';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <ChatListItem />
    </View>
  );
}