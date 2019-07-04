import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signInAction, signOutAction} from '../../../store/actions/LoginActionCreators';
import {Navbar, OverlayTrigger, Popover, Button} from 'react-bootstrap';

class GoogleAuth extends Component {

    state = {userInfo : {}}

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '593242262390-hqoio3eeg9ucvu37pcbglv37dk0bn01i.apps.googleusercontent.com',
                scope : 'profile email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(() => this.onAuthChange(this.auth.isSignedIn.get()));
            })
            
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            const userInfo = this.auth.currentUser.get().getBasicProfile();
            const { Eea, Paa, U3, ig, ofa, wea} = userInfo;
            this.setState({
                userInfo : {...userInfo, name : ig, email : U3, image : Paa, firstName : ofa, lastName : wea}
            })
            // this.props.saveUserDataAction(
            //         {
            //             name : ig, 
            //             email : U3, 
            //             image : Paa, 
            //             firstName : ofa, 
            //             lastName : wea, 
            //             address : '', 
            //             pinCode: '', 
            //             userId : Eea, 
            //             phone: '', 
            //             country : '',
            //             password : ''
            //         }
            //     );
            
            this.props.signIn(Eea);
        } else {
            this.props.signOut();
        }
    }

    render(){
        if(this.props.isSignedIn===null){
            return (
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
        if(this.props.isSignedIn){
            return (
                <Navbar.Brand>
                    <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay= {
                            <Popover id="popover-basic">
                                    <Button
                                        variant="light"
                                        onClick= { () => this.auth.signOut()}>
                                            Logout
                                    </Button>
                            </Popover>
                        }
                        >
                        <div style={{display:'inline',cursor:'pointer',textTransform:'capitalize'}}>
                            {this.state.userInfo.firstName}
                        
                            <img
                                alt={this.state.userInfo.name}
                                src={this.state.userInfo.image}
                                width="33"
                                height="33"
                                className="d-inline-block align-center"
                                style={{borderRadius:'50%', border:'1px solid red'}}
                            />
                        </div>
                        
                    </OverlayTrigger>
                </Navbar.Brand>                              
            ) 
        }
        return (
            <Navbar.Collapse onClick = {() => this.auth.signIn()} className="justify-content-end" style={{marginRight:'20px'}}>
                <Navbar.Text style={{cursor:'pointer', color:'#e74831'}}>
                    LOGIN
                </Navbar.Text>
            </Navbar.Collapse>
        )
    }
}
const mapStateToProps = store => {
    return { 
        isSignedIn : store.auth.isSignedIn
    }
}
export default connect(mapStateToProps,{signOut:signOutAction, signIn:signInAction})(GoogleAuth);