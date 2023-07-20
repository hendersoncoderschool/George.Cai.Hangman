import styled from "styled-components";

const Head = styled.div`
  width: 50px; 
  height: 50px; 
  border-radius: 100%;
  border: 10px solid black;
  position: absolute;
  top: 40px;
  right: -20px;
  
  @media (max-width: 768px) {
    top: 50px;
    border-color: white;
  }
`

const Body = styled.div`
  width: 10px;
  height: 80px;
  background: black;
  position: absolute;
  top: 100px;
  right: 0;

  @media (max-width: 768px) {
    height: 100px;
    top: 110px;
    background: white;
  }
`

const RightArm = styled.div`
  width: 70px;
  height: 10px;
  background: black;
  position: absolute;
  top: 110px;
  right: -70px;
  rotate: -30deg;
  transform-origin: left bottom;

  @media (max-width: 768px) {
    width: 100px;
    top: 130px;
    right: -100px;
    background: white;
  }
`

const LeftArm = styled.div`
  width: 70px;
  height: 10px;
  background: black;
  position: absolute;
  top: 110px;
  right: 10px;
  rotate: 30deg;
  transform-origin: right bottom;

  @media (max-width: 768px) {
    width: 100px;
    top: 130px;
    background: white;
  }
`

const RightLeg = styled.div`
  width: 80px;
  height: 10px;
  background: black;
  position: absolute;
  top: 160px;
  right: -70px;
  rotate: 60deg;
  transform-origin: left bottom;

  @media (max-width: 768px) {
    width: 100px;
    top: 190px;
    right: -90px;
    background: white;
  }
`

const LeftLeg = styled.div`
  width: 80px;
  height: 10px;
  background: black;
  position: absolute;
  top: 160px;
  right: 0;
  rotate: -60deg;
  transform-origin: right bottom;

  @media (max-width: 768px) {
    width: 100px;
    top: 190px;
    background: white;
  }
`

const Element1 = styled.div`
  height: 10px;
  width: 120px;
  background: black;

  @media (max-width: 768px) {
    height: 10px;
    width: 200px;
    background: white;
  }
`

const Element2 = styled.div`
  margin-left: 60px;
  height: 300px;
  width: 10px;
  background: black;

  @media (max-width: 768px) {
    margin-left: 100px;
    height: 320px;
    width: 10px;
    background: white;
  }
`

const Element3 = styled.div`
  margin-left: 60px;
  height: 10px;
  width: 150px;
  background: black;

  @media (max-width: 768px) {
    margin-left: 100px;
    height: 10px;
    width: 200px;
    background: white;
  }
`

const Element4 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 10px;
  background: black;

  @media (max-width: 768px) {
    height: 50px;
    background: white;
  }
`

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]
const Gallows = [Element4, Element3, Element2, Element1]
  
interface Drawing {
  numberOfGuesses: number
}

export default function Drawing({ numberOfGuesses }:Drawing) {
  return (
    <div style={{ position: "relative" }}>
      {BodyParts.slice(0, numberOfGuesses).map((Component, id) => <Component key={id} />)}
      {Gallows.map((Component, id) => <Component key={id} />)}
    </div>
  )
}
