import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class MainPage extends React.Component {
    render() {
        return (
            <View style = {styles.main_container}>
                <LinearGradient colors={['lightgreen', '#87cefa']} style={{ padding: 30, alignItems: 'center'}}>
                    <Text style={styles.main_title}>EaseMedic</Text>
                </LinearGradient>
                <Button title="Press me" disabled onPress={() => Alert.alert('Cannot press this one')}/>
                <Button title='SCAN QR CODE' color='#87cefa' onPress={() => Alert.alert('Cannot press this one')}/>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 24
    },
    main_title: {
        fontSize: 30,
        marginTop: -17,
        color: 'white'
    }
})

  
export default MainPage