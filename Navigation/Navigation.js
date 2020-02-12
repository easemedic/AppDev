import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import MainPage from '../Components/MainPage'
import QrCodeScanner from '../Components/QrCodeScanner'
import MyPrescriptions from '../Components/MyPrescriptions'
import GenerateQrCode from '../Components/GenerateQrCode'

const SearchStackNavigator = createStackNavigator({
    MainPage: {
        screen: MainPage
    },
    QrCodeScanner: {
        screen: QrCodeScanner
    },
    MyPrescriptions: {
        screen: MyPrescriptions
    },
    GenerateQrCode: {
        screen: GenerateQrCode
    }
})

export default createAppContainer(SearchStackNavigator)