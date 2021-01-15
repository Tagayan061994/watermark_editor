import React, { useState } from "react";
import * as Styled from "./style";
import { useDispatch } from "react-redux";

export const PositionBtns = React.memo(() => {
  const [data, setData] = useState([
    {
      degree: 0,
      params: {
        x: 20,
        y: 20,
      },
      clicked: false,
      id: 0,
    },
    {
      degree: 90,
      params: {
        x: 556,
        y: 13,
      },
      clicked: false,
      id: 1,
    },
    {
      degree: 270,
      params: {
        x: 30,
        y: 320,
      },
      clicked: false,
      id: 2,
    },
    {
      degree: 180,
      params: {
        x: 530,
        y: 320,
      },
      clicked: false,
      id: 3,
    },
  ]);
  const dispatch = useDispatch();

  const handlePositionChange = (item, positions) => {
    let updatedData = data.map((data) => {
      if (data.id === item.id) {
        data.clicked = true;
      } else {
        data.clicked = false;
      }
      return data;
    });
    setData(updatedData);
    dispatch({ type: "SET_POSITION", payload: positions });
  };

  return (
    <>
      <Styled.Label>Position</Styled.Label>
      <Styled.PosBtnWrapper>
        {data.map((item, i) => (
          <Styled.PosBtn
            clicked={item.clicked}
            onClick={() => handlePositionChange(item, item.params)}
            key={i}
          >
            <Styled.PosBtnDecor degree={item.degree} clicked={item.clicked} />
          </Styled.PosBtn>
        ))}
      </Styled.PosBtnWrapper>
    </>
  );
});
