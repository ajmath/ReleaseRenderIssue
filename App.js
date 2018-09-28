/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {Form, Container, Content, Item, Label, Input, Button, StyleProvider} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import getTheme from "./native-base-theme/components";
import variables from "./native-base-theme/variables/commonColor";

type Props = {};
export default class App extends Component<Props> {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Container>
          <Content scrollEnabled={false}>
            <Form>
              <Item floatingLabel={true} style={styles.formItem}>
                <Label>Email address</Label>
                <Input
                  accessibilityLabel={Platform.OS === "ios" ? "" : "Email address"}
                  keyboardType={"email-address"}
                  returnKeyType={"next"}
                  autoCapitalize={"none"}
                  value={this.state.username}
                  onSubmitEditing={() => this.passwordRef.focus()}
                  onChangeText={(t) => this.setState({ username: t, typingOccurred: true })}
                />
              </Item>
              <Item floatingLabel={true} style={styles.formItem}>
                <Label>Password</Label>
                <Input
                  accessibilityLabel={Platform.OS === "ios" ? "" : "Password"}
                  getRef={(input) => (this.passwordRef = input._root)}
                  secureTextEntry={true}
                  returnKeyType={"done"}
                  value={this.state.password}
                  onSubmitEditing={this.login}
                  onChangeText={(t) => this.setState({ password: t, typingOccurred: true })}
                />
              </Item>
              <Button
                accessibilityLabel={"Sign In"}
                block={true}
                style={styles.button}
                onPress={this.login}
                disabled={!this.state.username || !this.state.password}
              >
                <Text>Sign In</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </StyleProvider>
    );
  }

  login = () => {
    console.log("Logging in");
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  formItem: {
    marginRight: 20,
    marginLeft: 20,
  },
  button: {
    margin: 20,
    marginTop: 30,
  },
});
