import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from "react-navigation";
import Login_page from "../Components/Login_page";
import PageInscription from "../Components/PageInscription";
import Page_Main from "../Components/Page_Main";

const LoginStackNavigator = createStackNavigator({
    Login_page: {
        screen: Login_page,
        navigationOptions: {
            headerShown: false
        }
    },
    PageInscription: {
        screen: PageInscription,
        navigationOptions: {
            headerShown: false
        }
    },
    Page_Main: {
        screen: Page_Main,
        navigationOptions: {
            headerShown: false
        }
    }

})

export default createAppContainer(LoginStackNavigator)
