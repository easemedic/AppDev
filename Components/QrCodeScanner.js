import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Image, Linking, ToastAndroid, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import PrescriptionsInfos from './Container'

class QrCodeScanner extends React.Component {

  onSuccess(e) {
    Linking
      .canOpenURL(e.data).then((supported) => {
        if(!supported) {
          console.log("QrCode scanné et enregistré")
          ToastAndroid.show('QrCode scanné et enregistré', ToastAndroid.SHORT)
          let copiedObject = JSON.parse(e.data)
          console.log(copiedObject)
          PrescriptionsInfos.set(copiedObject)
        } else {
          console.log("Le QrCode n'est pas correct")
          ToastAndroid.show('Le QrCode n\'est pas correct', ToastAndroid.SHORT)
        }
      })
  }

  _displayMyPrescriptions = () => {
    this.props.navigation.navigate('MyPrescriptions')
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.main_container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          topContent={
            <Text style={styles.centerText}>
              <Text style={styles.headerText}>EaseMedic Scanner</Text>
            </Text>}
          bottomContent={
            <TouchableOpacity style={{marginTop: 50}} onPress={() => this._displayMyPrescriptions()}>
              <Image
                  source={require('../Ressources/prescriptions.png')}>
              </Image>
            </TouchableOpacity>
          }>
        </QRCodeScanner>
      </View>
    )}
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  centerText: {
    flex: 1,
    fontSize: 30,
    padding: 32,
    color: '#000',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00adee',
  },
});
AppRegistry.registerComponent('default', () => QrCodeScanner);

export default QrCodeScanner