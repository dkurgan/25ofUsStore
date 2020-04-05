import React from 'react'
import Alert from "../components/Alert"

//check if alert belongs to item
export const rightPlaceAlert = (alert, id) => {
    if (id === alert) {
        return <Alert/>
    } 
    return null
}