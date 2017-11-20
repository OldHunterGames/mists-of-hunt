// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Button } from 'semantic-ui-react';

type Props = {};

export default class MainPage extends Component<Props> {
    render() {
        return (
            <Segment>
                <Header>Mists of Hunt</Header>
                <Button
                    as={Link}
                    to="/character-editor"
                >
                    Зарегистрироваться
                </Button>
            </Segment>
        );
    }
}
