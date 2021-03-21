import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from "react-navigation";
import Pageaccueil from "../Components/Pageaccueil";
import PageInscription from "../Components/PageInscription";
import Page_Main from "../Components/Page_Main";

const PageaccueilStackNavigator = createStackNavigator({
    Pageaccueil: {
        screen: Pageaccueil,
        navigationOptions: {
            title: 'Page accueil'
        }
    },
    PageInscription: {
        screen: PageInscription,
    },
    Page_Main: {
        screen: Page_Main
    }

})

export default createAppContainer(PageaccueilStackNavigator)
