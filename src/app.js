import React from 'react';
import './app.css';
import { Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import PutterPage from './pages/PutterPage/PutterPage';


const App = () => {

    return (
        <Switch>
            <NavBar />
            <Route exact path='/putters' render={() =>
                <PutterPage />
            }>
            </Route>
            <Footer />
        </Switch>
    )
}

export default App;