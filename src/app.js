import React from 'react';
import './app.css';
import { Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import LandingPage from './pages/LandingPage/LandingPage';
import PutterPage from './pages/PutterPage/PutterPage';
import InsertsPage from './pages/InsertsPage/InsertsPage';
import ContactPage from './pages/ContactPage/Contact';

const App = () => {

    return (
        <>
        <NavBar />
        <Switch>
            <Route exact path ="/" render={() =>
            <div>
                <LandingPage />
                <Footer />
            </div>
            }></Route>
            <Route exact path='/putters' render={() =>
            <div>
                <PutterPage />
                <Footer />
            </div>
            }>
            </Route>
            <Route exact path="/inserts" render={() => 
            <div>
                <InsertsPage />
                <Footer />
            </div>
            }>
            </Route>
            <Route exact path="/contact" render={() => 
                <div>
                    <ContactPage />
                    <Footer />
                </div>
            }>
            </Route>
        </Switch>
        
        </>
    )
}

export default App;