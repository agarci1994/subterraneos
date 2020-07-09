import React, { useState } from "react";
import { StyleSheet, Text} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

 const Profile = () => {
   const [user, setUser] = useState("")
   const [password, setPass] = useState("");
   const [error, setError] = useState("")

    return (
      <Container style={styles.container}>
        <Text style={styles.text}>Iniciar sesion</Text>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username:</Label>
              <Input value={user} onChange={e => setUser(e.value)}/>
            </Item>
            <Item fixedLabel last>
              <Label>Password:</Label>
              <Input value={password} onChange={e => setPass(e.value)}/>
            </Item>
          </Form>
          <Text style={styles.error}>{error}</Text>
          <Button style={styles.button} block light onPress={() => setError("Contraseña incorrecta")}>
            <Text>Iniciar Sesion</Text>
          </Button>
        </Content>
      </Container>
    );
}

const styles = StyleSheet.create({
  container: {
  padding: 50,
  },
  text:{
    fontWeight: "bold"
  },
  button:{
    marginTop: 30,

  },
  error: {
    marginLeft: 10,
    color: "red"
  }
});


export default Profile