import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 6px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #42b72a;
  color: white;
  cursor: pointer;
  border-radius: 6px;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  //const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = async (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            type="text"
            name="username"
            required
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            required
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input type="password" placeholder="confirm password" />

          <Agreement>
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
            Policy. You may receive SMS notifications from us and can opt out at
            any time.
          </Agreement>
          <Button type="submit" onClick={handleClick}>
            Register
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
