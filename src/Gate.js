import React from "react";
import './custom.css';

const Gate = ({isOpen}) => {
    return isOpen == true ? 'Gate is Open' : 'Gate is Close'
}

export default Gate;