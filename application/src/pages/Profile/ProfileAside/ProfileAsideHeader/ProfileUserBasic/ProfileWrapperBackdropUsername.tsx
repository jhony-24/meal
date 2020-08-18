import React from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIAvatarImage } from "shared/styled/UIAvatar.styled";

export default ({ image, children } : any) => {
	return (
		<UIContainer position="relative">
			<UIAvatarImage {...styles.backdrop} src={image} />
			<UIContainer {...styles.wrapperContainer}>{children}</UIContainer>
		</UIContainer>
	);
};

const mb = 120;
const styles = {
	backdrop: {
		borderRadius: 8,
		height: 250,
		width: "100%",
	},
	wrapperContainer: {
		bottom: mb,
		mb: -mb,
		position: "relative",
		width: "100%",
	},
};
