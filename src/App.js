import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Profile from "./components/Profile";
import Story from "./components/Story";
import Reels from "./components/Reels";
import Post from "./components/Post";
// import Igtv from "./components/Igtv";
import Error from "./components/Error";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "./components/Styles/commonStyles.css";


const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/igsaver/" component={Profile} />
                <Route path="/igsaver/profile" component={Profile} />
                <Route path="/igsaver/story" component={Story} />
                <Route path="/igsaver/reel" component={Reels} />
                <Route path="/igsaver/post" component={Post} />
                {/* <Route path="/igsaver/igtv" component={Igtv} /> */}
                <Route component={Error} />
                <Route />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
