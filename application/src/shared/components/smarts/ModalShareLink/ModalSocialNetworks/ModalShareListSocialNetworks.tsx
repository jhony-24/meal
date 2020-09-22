import React from "react";
import LinksShare from "./LinksShare";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import ModalAvatarSocialNetwork from "./ModalAvatarSocialNetwork";

const ModalShareListSocialNetworks = ({ linkShare } : any) => {
	return (
		<UIFlexContainer alignItems="center" justifyContent="space-between" my="2em" >
			{LinksShare.map((e, i) => (
				<ModalAvatarSocialNetwork 
				key={i} color={e.color} icon={e.icon} transitionDelay={i} link={e.link+linkShare} />
			))}
		</UIFlexContainer>
	);
};

export default ModalShareListSocialNetworks;
