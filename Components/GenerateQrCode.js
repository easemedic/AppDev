import React from "react";
import QRCode from "react-native-qrcode-svg";
import {View, StyleSheet, Text} from 'react-native'
import PrescriptionsInfos from './Container'

class GenerateQrCode extends React.Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {}

  render() {
      let data = PrescriptionsInfos.get()

    return (
        <View style={styles.main_container}>
            <Text style={styles.easeMedic_signatue}>EaseMedic QRCode</Text>
            <View style={styles.QRCode}>
                <QRCode
                    level="Q"
                    size={300}
                    value={JSON.stringify({data})}>
                </QRCode>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
    },
    easeMedic_signatue: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00adee',
    },
    QRCode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default GenerateQrCode
