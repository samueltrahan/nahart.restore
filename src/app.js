import React from 'react';
import './app.css';
import { Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import PutterPage from './pages/PutterPage/PutterPage';


const App = () => {

    return (
        <>
        <NavBar />
        <Switch>
            <Route exact path='/putters' render={() =>
                <PutterPage />
            }>
            </Route>
        </Switch>
        <Footer />
        </>
    )
}

export default App;