import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteFrame from './SiteFrame';
import HomePage from '../Site/HomePage';

import './styles.scss'


const mapStateToProps = state => {
    return {

    };
};

class MainWindow extends React.Component {

    render() {

        return (
            <div className="MainWindow">
                <SiteFrame>
                    <Switch>

                        <Route path='/' Component={HomePage} />
                    
                    </Switch>
                </SiteFrame>
            </div>
        )
    };
};

export default connect(mapStateToProps)(MainWindow);