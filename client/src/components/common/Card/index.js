import styled from "styled-components";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = styled.div`
  border: 0;
  margin: 3rem 3rem 8rem 3rem;
  border-radius: 0.6rem;
  color: rgba(0, 0, 0, 0.87);
  background: white;
  width: 100%;
  box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.14);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  
  * {
    font-size: 100%;
  }

  input {
    font-size: 1.6rem !important;
  }

  .MuiTextField-root {
    width: 100%;
  }

  .MuiFormLabel-root,.MuiInputBase-root {
    font-size: 1.6rem !important;
  }

  .disabled {
    color: rgba(0, 0, 0, 0.38)
  }

  .submit {
    margin: 1rem 0 0.2rem 0;
  }
`;

export default Card;

export { Card, CardBody, CardFooter, CardHeader};