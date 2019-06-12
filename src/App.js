import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

const Box = styled.div`
  border: 1px solid black;
  height: 80px;
  width: 80px;
  margin: 5px;
  display: grid;
  justify-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

const Number = styled.div`
  font-weight: 600;
`;

const Date = styled.p`
  font-size: 10px;
`;

const Markers = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  p {
    border: 1px solid black;
    margin: 0;
  }
`;

const Inner = styled.div`
   border: 0.01em solid black;
   width:100%;
   text-align:center;
   font-size:10px;
   display:flex;
   justify-content:center;
   align-items:center;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 style={{textAlign:'center'}}>Habit Builder</h2>
        <Wrapper>
          {Array.from(Array(100).keys(), n => n + 1).map((i, index) => {
            return (
              <Box>
                <Number>Day {index + 1}</Number>
                <Date>
                  {moment()
                    .add(index+1, "days")
                    .format("dd D MMM")}
                </Date>
                <Markers>
                <Inner>🧘‍♂️</Inner>
                  <Inner>💻</Inner>
                  <Inner>🏋️‍♂️</Inner>
                </Markers>
              </Box>
            );
          })}
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
