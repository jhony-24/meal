import React from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";

const VideoPlayerFooterControls = ({ children } : any) => {
	return (
		<UIContainer
			css={{ background: "rgba(0,0,0,.4)"}}
			p=".5em"
			position="absolute"
			bottom="0"
			left="0"
			width="100%"
		>
			<UIFlexContainer alignItems="center" justifyContent="space-between">
				{children}
			</UIFlexContainer>
		</UIContainer>
	);
};

export default VideoPlayerFooterControls;
