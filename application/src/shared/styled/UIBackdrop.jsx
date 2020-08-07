import styled from "@emotion/styled";
import { computePositionAbsolute } from "./styledUtils/positions";


const propsBackdropColor = props => {
	let color = 0;
	let themeColor;
	let opacity;
	if(props.light) {
		color = 255;
	}
	themeColor = Array(3).fill(color).join(',');
	opacity = props.opacity || 0.7;
	return `rgba(${themeColor},${opacity})`;
}


export const UIBackdrop = styled.div`
  position: absolute;
	z-index:100;
  ${computePositionAbsolute};
  background: ${props => propsBackdropColor(props)};
`;