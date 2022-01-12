import React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'
import './styles.scss'


const SiteFrame = props => {

    const { children } = props
    return (
        <div className="SiteFrame">
            <div className="SiteFrame__content">
                <MainNav />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default SiteFrame