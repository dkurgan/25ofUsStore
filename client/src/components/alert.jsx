import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alert }) => {
    if (alert != null && alert.length > 0) {
        return <div key={alert[0].alId} role="alert" className={`ui ${alert[0].color} message`}>
            {alert[0].msg}
        </div>
    }
    else
        return null
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps)(Alert);