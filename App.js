/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react'
import {
  // SafeAreaView,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
  SafeAreaView,
  createStackNavigator
} from 'react-navigation'

class Inner extends Component {
  static navigationOptions = {
    headerTitle: <Text>With Header</Text>
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>TOP</Text>
        </View>
        <View>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
        <View>
          <Text style={styles.welcome}>BOTTOM</Text>
        </View>
      </View>
    )
  }
}

class Home extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>TOP</Text>
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Button onPress={() => this.props.navigation.navigate('Inner')} title='Go to inner' />
          </View>
          <View>
            <Text style={styles.welcome}>BOTTOM</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const Navigator = createStackNavigator({
  Inner,
  Home
}, {
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render () {
    return (
      <Navigator />
    )
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
