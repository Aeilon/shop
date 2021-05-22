import React from "react";
import { useDispatch } from "react-redux";
import { gridView, largeView } from "../../../actions/view";
import { useSelector } from "react-redux";
import {
  Main,
  Flex,
  FlexIcon,
  FlexLine,
  GridIcon,
  Grid,
  GridBlock,
} from "./style";

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
