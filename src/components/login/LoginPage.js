import React, { PropTypes } from 'react';
import { Form, FormGroup, Col, FormControl, Button, Checkbox, ControlLabel } from 'react-bootstrap';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { username: "", password: "" };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, val) { 
        this.setState({ 
            [event.target.name]: event.target.value 
        });
    }

    login(event) {
        event.preventDefault();
        const cred = {username: this.state.username, password: this.state.password};
        this.props.actions.startAuth(cred);
    }

    render() {
        return (
            <Form horizontal className="topOffset" onSubmit={this.login}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>Username</Col>
                    <Col sm={5}>
                        <FormControl name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                    <Col sm={5}>
                        <FormControl name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={6} sm={5}>
                        <Button bsStyle="primary" type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authenticated: state.authenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
