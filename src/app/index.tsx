import ChatListItem from '@/components/ChatListItem';
import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';
import chats from '@assets/dummy-data/ChatRooms'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <FlatList
        data={chats}
        renderItem={({item}) => (
          <ChatListItem chat={item}/>
        )}
      />
    </View>
  );
}