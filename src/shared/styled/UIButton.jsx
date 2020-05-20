import styled from "@emotion/styled";

//base button theme
const UIButton = styled.button`
    border-radius : 5px;
    padding:10px 20px;
    transition : opacity .1s;
    font-size: ${props => props.theme.fontSize.regular};
    &:hover {
        opacity : 0.8;
    }
`

export const UIButtonHoverPrimary = styled(UIButton)`
    &:hover {
        background : ${props => props.theme.colors.primary};
        > * {
            color : ${props => props.theme.colors.light};
        }
    }
`

export default UIButton;