import styled from "@emotion/styled";

export const UIInput = styled.input`
    padding : 10px;
    border-radius : 20px;
    width:${props => props.sizeWidth || "100%"};
    background : ${props => props.theme.colors.grayLight1};
`
