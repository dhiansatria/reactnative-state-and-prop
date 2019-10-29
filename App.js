/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react' // wajib ada
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  AppRegistry,
  Button,
  Alert,
  ToastAndroid
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

export default class App extends Component {
  // function untuk button
  // onPressButton () {
  //   Alert.alert('Anda klik sebuah tomboh')
  // }

  constructor (props) {
    super(props)
    this.state = {
      angka1: '',
      angka2: '',
      hasil: 0, // untuk perhitungan
      visible: true // untuk
    }
  }

  // fungsi untuk membuka toast
  // ada 3 jenis show pada toast
  tampilkanToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Hello Toast', // teks
      ToastAndroid.LONG, // durasi
      ToastAndroid.TOP, // lokasi muncul
      25, // xOffset
      50 // yOffset
    )
  }

  // membuat fungsi

  hitungJumlah = () => {
    const { angka1, angka2 } = this.state
    this.setState({
      hasil: Number(angka1) + Number(angka2)
    })
  }

  hitungKurang = () => {
    const { angka1, angka2 } = this.state
    this.setState({
      hasil: Number(angka1) - Number(angka2)
    })
  }

  hitungKali = () => {
    const { angka1, angka2 } = this.state
    this.setState({
      hasil: Number(angka1) * Number(angka2)
    })
  }

  hitungBagi = () => {
    const { angka1, angka2 } = this.state
    this.setState({
      hasil: Number(angka1) / Number(angka2)
    })
  }

  // fungsi untuk button
  onPressButton () {
    Alert.alert('Ini adalah button')
  }

  // fungsi tampilkan alert

  tampilkanAlert = () => {
    Alert.alert(
      'Alert Title',
      'Alert Message',
      [
        { text: 'Okey', onPress: () => console.log('Okey Pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'Cancel'
        },
        { text: 'Later', onPress: () => console.log('Later Pressed') }
      ],
      { cancelable: false }
    )
  }

  tampilkanToastdariAlert = () => {}

  render () {
    // memunculkan hasil
    // let img = {
    //   uri: 'https://facebook.github.io/react-native/img/header_logo.png'
    // }
    return (
      <View style={styles.container}>
        <Text> Membuat kalkulatir sederhana </Text>
        {/* <Image source={img} style={{ width: 250, heigt: 250 }} /> */}

        <TextInput
          value={this.state.angka1}
          placeholder='Tuliskan ANgka 1'
          onChangeText={angka1 => this.setState({ angka1 })}
        />

        <TextInput
          value={this.state.angka2}
          placeholder='Tuliskan ANgka 2'
          onChangeText={angka2 => this.setState({ angka2 })}
        />

        <Button
          onPress={this.hitungJumlah}
          title='Penjumlahan'
          //  color='abc123'
        />
        <Button title='Hasil Jumlah Alert' onPress={this.hitungJumlah} />

        <Button
          onPress={this.hitungKurang}
          title='Pengurangan'
          //  color='abc123'
        />

        <Button
          onPress={this.hitungKali}
          title='Perkalian'
          //  color='abc123'
        />

        <Button
          onPress={this.hitungBagi}
          title='Pembagian'
          //  color='abc123'
        />

        <Text> HASIL YANG DIDAPATKAN </Text>
        <Text> {this.state.hasil} </Text>

        <Button title='Munculkan Toast' onPress={this.tampilkanToast} />

        <Button title='Tampilkan Alert' onPress={this.tampilkanAlert} />
      </View>

    //   <View>
    // <Button style={styles.}
    //   </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
    // backgroundColor: '#00000'
  }
})
