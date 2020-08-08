import { UIContainer } from "shared/styled/UIContainer";
import { jsx } from "@emotion/core";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
/** @jsx jsx */

const VideoPlayerFooterControls = ({children}) => {
	return (
		<UIContainer
			padding="1em"
			css={{ background: "rgba(0,0,0,.4)" }}
			position="absolute"
			bottom="0"
			left="0"
			sizeWidth="100%"
			
		>
			<UIContainer padding=".5em" css={{background:"rgba(0,0,0,.4)"}} position="absolute" bottom="0" left="0" sizeWidth="100%">
				<UIFlexContainer align="center" justify="space-between">
					{children}
				</UIFlexContainer>
			</UIContainer>
		</UIContainer>
	);
};

export default VideoPlayerFooterControls;