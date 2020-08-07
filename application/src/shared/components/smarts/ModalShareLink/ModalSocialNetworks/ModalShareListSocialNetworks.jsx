import React from "react";
import LinksShare from "./LinksShare";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import ModalAvatarSocialNetwork from "./ModalAvatarSocialNetwork";

const ModalShareListSocialNetworks = ({ linkShare }) => {
	return (
		<UIFlexContainer align="center" justify="space-between" marginVertical="2em" >
			{LinksShare.map((e, i) => (
				<ModalAvatarSocialNetwork 
				key={i} color={e.color} icon={e.icon}transitionDelay={i} link={e.link+linkShare} />
			))}
		</UIFlexContainer>
	);
};

export default ModalShareListSocialNetworks;
