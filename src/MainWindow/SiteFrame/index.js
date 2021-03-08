import React from 'react';

import Footer from './Footer';
import MainNav from './MainNav';
import Modal from './Modal';

import './styles.scss';


class SiteFrame extends React.Component {

    render() {

        const { children } = this.props;

        return (
            <div className="SiteFrame">
                <MainNav />
                <Modal />
                <div className="SiteFrame__content">
                    {children}
                </div>
                <Footer />
            </div>
        )
    };
};

export default SiteFrame;