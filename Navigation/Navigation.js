import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from "react-navigation";
import Login_page from "../Components/Login_page";
import PageInscription from "../Components/PageInscription";
import Page_Main from "../Components/Page_Main";
import Tests from "../Components/Tests";
import Add_Meal from "../Components/Add_Meal";
import Cam from "../Components/Cam";
import FoodDetail from "../Components/FoodDetail";
import MenuPage from "../Components/MenuPage";
import MyAds from "../Components/MyAds";
import AddMoney from "../Components/AddMoney";
import MyAccount from "../Components/MyAccount";

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
    },
    Add_Meal: {
        screen: Add_Meal,
        navigationOptions: {
            headerShown: false
        }
    },
    Cam: {
        screen: Cam,
        navigationOptions: {
            headerShown: false
        }
    },
    FoodDetail: {
        screen: FoodDetail,
        navigationOptions: {
            headerShown: false
        }
    },
    MenuPage: {
        screen: MenuPage,
        navigationOptions: {
            headerShown: false
        }
    },
    MyAds: {
        screen: MyAds,
        navigationOptions: {
            headerShown: false
        }
    },
    AddMoney: {
        screen: AddMoney,
        navigationOptions: {
            headerShown: false
        }
    },
    MyAccount: {
        screen: MyAccount,
        navigationOptions: {
            headerShown: false
        }
    }

})

export default createAppContainer(LoginStackNavigator)

