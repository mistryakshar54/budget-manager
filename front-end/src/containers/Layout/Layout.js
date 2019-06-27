import React, { Component } from 'react';
import AppHeader from '../Header/Header';
import AppContent from '../Content/Content';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppLayout  extends Component{

    render(){
        return(
            <div className="row trim-margin">
                <div className="container-fluid trim-padding">
                    <Router>
                        <AppHeader/>
                        <AppContent />
                    </Router>
                </div>
            </div>
        );
    }
}

export default AppLayout;