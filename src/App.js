
import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import ReduxLearn from "./pages/reduxLearn";

class App extends React.Component {
    render() {
        return (
            <>
                <Provider store={store}>
                    <ReduxLearn />
                </Provider>
            </>
        )
    }
}

export default App;