import styled from "@emotion/styled";
import { computePadding, computeMargin } from "./styledUtils/boxes";


export const UIFlexContainer = styled.div(
  {
    display: "flex",
  },
  (props) => ({
    alignItems: props.align && props.align,
    justifyContent: props.justify && props.justify,
    flexDirection: props.flexDir && props.flexDir,
    flex: props.flex && props.flex,
    width: props.sizeWidth && props.sizeWidth,
    height: props.sizeHeight && props.sizeHeight,
    ...computeMargin(props),
    ...computePadding(props),
  })
);
