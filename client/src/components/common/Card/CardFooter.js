import styled from "styled-components";

export default styled.div`
  padding: 0;
  padding-top: 1rem;
  margin: 0 1.5rem 1rem;
  border-radius: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background-color: transparent;
  border: 0;

  button,button:hover {
    color: white;
    background-color: #9c27b0;
  }

  button {
    box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);
    font-size: 1.4rem;

    &:hover {
      box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);
    }
  }
`;