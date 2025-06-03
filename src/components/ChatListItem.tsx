import { Image, StyleSheet, Text, View } from 'react-native'

const ChatListItem = ({chat}) => {
  console.log(chat)
  return (
    <View style={styles.container}>

      <Image 
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
        style={styles.image}
      />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>2</Text>
      </View>

      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text style={styles.name}>{chat.users[1].name}</Text>
          <Text>11:11 AM</Text>
        </View>

        <Text numberOfLines={1}>{chat.lastMessage.content}</Text>
      </View>

    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    padding: 8
  },
  image: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 20
  },
  badge: {
    backgroundColor: '#3872E9',
    width: 20,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 35,
    top: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  badgeText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12
  },
  headerContainer: {
    flex: 1,
    gap: 3,
    // backgroundColor: 'grey',
    marginLeft: 8
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'lime',
  },
  name: {
    fontWeight: 600
  }
})