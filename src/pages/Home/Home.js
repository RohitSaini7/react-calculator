import React from "react";
import styled from "styled-components";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Section>
        <Calculator />
      </Section>
    </React.Fragment>
  );
}

export default Home;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
`;
