import React from 'react'
import Button from '../components/general/Button'
import MastHead from './MastHead'
import './styles.scss'


const HomePage = props => {
    return (
        <div className="HomePage">
            <MastHead />

            <div className="HomePage__content">
                <div className="HomePage__appDescription">
                    <p>This app was designed for my personal use.</p>
                    <p>The site is entirely free to use, and is maintained solely by myself.</p>
                    <p>Happy Cooking!</p>
                    <p className="HomePage__signoff">&hearts; -Katie Gorbell</p>
                </div>
                <Button>hello</Button>

            </div>
        </div>
    )
}

export default HomePage