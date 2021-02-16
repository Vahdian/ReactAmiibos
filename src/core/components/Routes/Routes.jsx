import {Route, Switch} from 'react-router-dom';
import { AmiibosPage } from '../../../pages/AmiibosPage/AmiibosPage';
import {HomePage } from '../../../pages/HomePage/HomePage'
import {GamesPage} from '../../../pages/GamesPage/GamesPage'
import {AmiibosDetailPage} from '../../../pages/AmiibosPage/pages/AmiibosDetailPage';
import { ContactPage } from '../../../pages/ContactPage/ContactPage';

export function Routes(){
    return(
       
        <Switch>
        <Route path="/amiibos/:idamiibo">
            <AmiibosDetailPage></AmiibosDetailPage>
            </Route>
            <Route path="/amiibos">
                <AmiibosPage></AmiibosPage>
            </Route>
            <Route path="/games">
                <GamesPage></GamesPage>
            </Route>
            <Route path="/contact">
                <ContactPage></ContactPage>
            </Route>
            <Route path="/">
                <HomePage></HomePage>
                </Route>
        </Switch>
    )
}