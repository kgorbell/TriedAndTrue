import React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'
import './styles.scss'


const SiteFrame = props => {

    const { children } = props
    return (
        <div className="SiteFrame">
            <MainNav />
            {children}
            <Footer />
        </div>
    )
}

export default SiteFrame