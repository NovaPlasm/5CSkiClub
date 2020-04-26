import styled from "styled-components";

export default styled.div`
  padding: 1.75rem;
  margin: -2rem 2rem 0rem 2rem;
  border-bottom: none;
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4);
  z-index: 3 !important;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  &:first-child {
    border-radius: 0.3rem;
  }

  h4 {
    margin-top: 0;
    color: white;
    font-weight: 300;
    font-family: inherit;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    font-size: 1.6rem;
    color: rgba(255,255,255,.62);
    font-family: inherit;
  }
`;