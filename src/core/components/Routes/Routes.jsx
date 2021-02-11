import {Route, Switch} from 'react-router-dom';
import { AmiibosPage } from '../../../pages/AmiibosPage/AmiibosPage';
import {HomePage } from '../../../pages/HomePage/HomePage'

export function Routes(){
    return(
        <Switch>
            <Route path="/amiibos">
                <AmiibosPage></AmiibosPage>
            </Route>
            <Route path="/">
                <HomePage></HomePage>
                </Route>
        </Switch>
    )
}