import React from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { gridView, largeView } from "../../../components/actions/view";
import { useSelector } from "react-redux";

const Main = styled.div`
  width: 8.313rem;
  height: 3.75rem;
  border: 1.5px solid ${({ theme }) => theme.color.gray};
  background: ${({ theme }) => theme.color.gray};
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const FlexLine = styled.div<{ view: string }>`
  width: 100%;
  height: 0.3rem;
  border-radius: 0.75px;
  ${({ view }) =>
    view === "large"
      ? css`
          background: ${({ theme }) => theme.color.white};
        `
      : css`
          background: ${({ theme }) => theme.color.gray};
        `}
`;

const Flex = styled.div<{ view: string }>`
  width: 50%;
  height: 100%;

  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  ${({ view }) =>
    view === "large"
      ? css`
          background: ${({ theme }) => theme.color.gray};
        `
      : css`
          background: ${({ theme }) => theme.color.white};
        `}

  &:hover {
    background: ${({ theme }) => theme.color.gray};

    ${FlexLine} {
      background: ${({ theme }) => theme.color.white};
    }
  }
`;

const FlexIcon = styled.div`
  height: 1.5rem;
  width: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const GridBlock = styled.div<{ view: string }>`
  width: 100%;
  height: 100%;
  ${({ view }) =>
    view === "large"
      ? css`
          background: ${({ theme }) => theme.color.gray};
        `
      : css`
          background: ${({ theme }) => theme.color.white};
        `}
`;

const Grid = styled.div<{ view: string }>`
  border-radius: 0 0.5rem 0.5rem 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  ${({ view }) =>
    view === "large"
      ? css`
          background: ${({ theme }) => theme.color.white};
        `
      : css`
          background: ${({ theme }) => theme.color.gray};
        `}

  &:hover {
    background: ${({ theme }) => theme.color.gray};

    ${GridBlock} {
      background: ${({ theme }) => theme.color.white};
    }
  }
`;

const GridIcon = styled.div`
  height: 1.7rem;
  width: 1.8rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default () => {
  const dispatch = useDispatch();
  const view = useSelector((state: ISelector) => state.view);
  return (
    <Main>
      <Flex view={view} onClick={() => dispatch(largeView())}>
        <FlexIcon>
          <FlexLine view={view} />
          <FlexLine view={view} />
          <FlexLine view={view} />
        </FlexIcon>
      </Flex>
      <Grid view={view} onClick={() => dispatch(gridView())}>
        <GridIcon>
          <GridBlock view={view} />
          <GridBlock view={view} />
          <GridBlock view={view} />
          <GridBlock view={view} />
          <GridBlock view={view} />
          <GridBlock view={view} />
          <GridBlock view={view} />
          <GridBlock view={view} />
          <GridBlock view={view} />
        </GridIcon>
      </Grid>
    </Main>
  );
};
