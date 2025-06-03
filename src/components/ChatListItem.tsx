import { Image, StyleSheet, Text, View } from 'react-native'

const ChatListItem = () => {
  return (
    <View style={styles.container}>

      <Image 
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
        style={styles.image}
      />

      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text style={styles.name}>Tina Ukuku</Text>
          <Text>11:11 AM</Text>
        </View>

        <Text numberOfLines={1}>somethingsomethinomethingsomethingsomethingsomethingsomething something</Text>
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