// @flow

import * as React from 'react';
import { injectIntl } from 'react-intl';
import { Segment, Header, Button } from 'semantic-ui-react';

import Character from 'game/character';
import genCharacter from 'game/character/generator';

import CharacterCard from 'views/character-card';

import i18n from './i18n';

type Props = {};

type State = {|
    character: Character
|};

class CharacterEditor extends React.Component<Props, State> {
    constructor() {
        super();

        this.state = {
            character: genCharacter()
        };
    }

    handleRandomize = () => {
        this.setState({
            character: genCharacter()
        });
    }

    render() {
        const { formatMessage } = this.props.intl;
        const { character } = this.state;

        return (
            <Segment>
                <Header>
                    {formatMessage(i18n.title)}
                </Header>
                <CharacterCard
                    character={character}
                />
                <Button onClick={this.handleRandomize}>
                    Randomize
                </Button>
            </Segment>
        );
    }
}

export default injectIntl(CharacterEditor);
