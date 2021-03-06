import React, { PropTypes } from 'react';
import {
    Form, FormGroup, Col, FormControl, Button,
    Checkbox, ControlLabel, ProgressBar
} from 'react-bootstrap';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

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
        const cred = { username: this.state.username, password: this.state.password };
        this.props.actions.startAuth(cred);
    }

    render() {
        if (this.props.authData.authenticated === true)
            setTimeout(() => { browserHistory.push('/courses'); }, 100);
        return (
            <Form horizontal onSubmit={this.login}
                className="form-login topOffset" role="form" >
                <FormGroup controlId="formLogin">
                    <Col componentClass={ControlLabel} sm={2}>Username</Col>
                    <Col sm={5}>
                        <FormControl name="username" required autoFocus onChange={this.handleChange}
                            className="form-control" value={this.state.username} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                    <Col sm={5}>
                        <FormControl name="password" type="password" value={this.state.password}
                            onChange={this.handleChange} className="form-control" required />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={6} sm={5}>
                        <Button bsStyle="primary" type="submit">Log in</Button>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={5}>
                        {this.props.authData.error ? <div className="alert alert-danger">{this.props.authData.error_description}</div> : null}
                        {this.props.authData.authenticated == null ?
                            <ProgressBar active now={100} /> : null}
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired,
    authData: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authData: state.authenticationData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
