import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./components/navigation.js";

class Home extends React.Component {
    render() {
        return (
            <Navigation />
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));