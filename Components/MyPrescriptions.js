import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import PrescriptionsInfos from './Container'


class MyPrescriptions extends React.Component {

    static navigationOptions = {
        header: null
    };

    _displayGenerateQrCode = () => {
        this.props.navigation.navigate('GenerateQrCode')
    }

    _display(item) {
        return (
        <Text style={styles.prescriptionText}>{item.médicament}{"\n"}Dose: {item.dose}{"\n"}Quantité: {item.qsp}{"\n"}</Text>
        )
    }

    render() {
        let infos = PrescriptionsInfos.get()
        return (
            <View style = {styles.main_container}>
                <Text style={styles.headerText}>Cabinet: {infos.cabinet}{"\n"}Date: {infos.date}{"\n"}Docteur: {infos.dr}{"\n"}</Text>
                <Text style={styles.prescriptionText}>Médicaments:{"\n"}</Text>
                <FlatList
                        data={infos.médicaments}
                        keyExtractor={(item) => id = item.id}
                        renderItem={({item}) =>
                        this._display(item)}>
                </FlatList>
                <TouchableOpacity style={{alignItems: 'center'}} onPress={() => this._displayGenerateQrCode()}>
                  <Image
                      source={require('../Ressources/qrcode.png')}>
                  </Image>
                </TouchableOpacity>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00adee',
        alignSelf:'center'
      },
    prescriptionText: {
        fontSize: 20,
        marginLeft: 20,
        color: '#0F85E0'
    }
})

  
export default MyPrescriptions
