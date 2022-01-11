/*

BUTTON: General Component
provides theming/styling and click functionality for button.

PROPERTY  DEFAULT    REQUIREMENT  TYPE      DESCRIPTION
children             required     Str/HTML  Serves as the label; option to use String or Html for more specific styling/addition of icon
click     null       optional     Function  Enacted on click IF disabled is not "true"
disabled  false      optional     Boolean   Prevents click handler from firing
theme     "default"  optional     String    Sets color/theme styles
size      "medium"   optional     String    Sets size/shape styles
                                            OPTIONS: "small", "medium", "large", "fill"

*/

import React from 'react'
import _ from 'lodash'
import './styles.scss'


const Button = props => {

    const { children, click, theme = "default", size = "medium", disabled = false } = props
    let className = "Button"
    if (theme === "default") className += " Button--default"
    if (size === "small") className += " Button--small"
    if (size === "medium") className += " Button--medium"
    if (size === "large") className += " Button--large"
    if (size === "fill") className += " Button--fill"
    if (disabled) className += " Button--disabled"

    const handleClick = () => {
        if (!disabled && !_.isEmpty(click)) click() 
    }

    return (
        <button className={className} onClick={handleClick}>
            <span dangerouslySetInnerHTML={{ __html: children }}/>
        </button>
    )
}

export default Button