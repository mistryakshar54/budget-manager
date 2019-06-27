import React , { useState , useEffect} from 'react';
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import './Toast.scss';


const ToastComponent = ( props ) => {
    return(
        <Toast show={props.showToast} 
                 
               onClose={props.closeToastHandler} 
               autohide delay={1000}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Added</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
                {props.showMessage}
            </Toast.Body>
          </Toast>
    );

}

export default ToastComponent;