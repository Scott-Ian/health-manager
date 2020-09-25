import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World!!</Text>
        <Image source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'
        }}/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
