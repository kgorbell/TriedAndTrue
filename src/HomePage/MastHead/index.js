import React from 'react'
import image from '../../assets/prepTable.jpeg'
import Button from '../../components/general/Button'
import './styles.scss'


const MastHead = props => {
    return (
        <div className="MastHead" style={{ backgroundImage: `url(${image})` }}>
            <div className="MastHead__cta">
                <div className="MastHead__ctaBlur"/>
                <div className="MastHead__ctaContent">
                    <span className="MastHead__title">Tried & True</span>
                    <span className="MastHead__tagline">Personalize, Build, Organize, and Store your recipes for generations to come.</span>
                    <div className="MastHead__actionButtons">
                        <Button size="large">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MastHead