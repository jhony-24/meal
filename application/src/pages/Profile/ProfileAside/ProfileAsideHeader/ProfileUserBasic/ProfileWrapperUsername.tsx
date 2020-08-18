import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UITextBoldLarge } from "shared/styled/UIText.styled";
import AvatarWallpaper from "shared/components/dumbs/AvatarWallpaper";

export default () => {
	return (
		<UIFlexContainer flexDirection="column" alignItems="center">
			<UIContainer mb={10}>
				<AvatarWallpaper image={image} size={150} />
			</UIContainer>
			<UITextBoldLarge textAlign="center">
				Jhony Vega | Programmer
			</UITextBoldLarge>
		</UIFlexContainer>
	);
};

const image = "https://cdn.pixabay.com/photo/2020/05/24/08/40/machine-5213060__340.jpg";
