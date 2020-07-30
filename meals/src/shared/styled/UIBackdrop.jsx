import styled from "@emotion/styled";

export const UIBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, ${(props) => props.opacity || 0.5});
`;