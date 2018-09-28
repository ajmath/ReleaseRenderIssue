/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, Container, Item, Label, Input, Button} from 'native-base';

export default class App extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <Container>
          <Item floatingLabel={true}>
            <Label>Email address</Label>
            <Input
              value={this.state.username}
              onChangeText={(t) => this.setState({ username: t })}
            />
          </Item>
          <Item floatingLabel={true}>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(t) => this.setState({ password: t })}
            />
          </Item>
          <Button
            block={true}
            onPress={() => alert(JSON.stringify(this.state))}
          >
            <Text>Show state</Text>
          </Button>
      </Container>
    );
  }
}
