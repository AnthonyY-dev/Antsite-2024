import React from 'react'
import { useLocation } from 'react-router-dom';

const renderNavigation = (noRender) => {
    let location = useLocation()

    for (let i = 0; i <= noRender.length; i++) {    
        if (noRender[i] == location.pathname) {
            return false;
            break;
        }
    }
  return true 
}

export default renderNavigation
