import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class MainPage extends React.Component {

    static navigationOptions = {
        header: null
    };

    _displayQrCodeScanner = () => {
        this.props.navigation.navigate('QrCodeScanner')
      }

    _displayMyPrescriptions = () => {
        this.props.navigation.navigate('MyPrescriptions')
    }

    render() {
        return (
            <View style = {styles.main_container}>
                <LinearGradient colors={['#2bb554', '#00adee']} style={{ padding: 30, alignItems: 'center'}}>
                    <Text style={styles.main_title}>EaseMedic</Text>
                </LinearGradient>
                <View style = {styles.button_container}>
                <TouchableOpacity onPress={() => this._displayQrCodeScanner()}>
                        <Image
                            style={styles.button_style}
                            source={require('../Ressources/QrLogo.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert("Work in progress")}>
                        <Image
                            style={styles.button_style}
                            source={require('../Ressources/PharmaLogo.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert("Work in progress")}>
                        <Image
                            style={styles.button_style}
                            source={require('../Ressources/RappelLogo.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._displayMyPrescriptions()}>
                        <Image
                            style={styles.button_style}
                            source={require('../Ressources/prescriptions.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    button_container: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 10,
    },
    button_style: {
        alignSelf: 'center'
    },
    main_title: {
        fontSize: 30,
        marginTop: -17,
        color: 'white',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000',
      },
})

  
export default MainPage
