import React from "react";
import ProfileAsideNavigatorLink from "./ProfileAsideNavigatorLink";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { useRouteMatch } from "react-router-dom";

const ProfileAsideNavigatorContainer = () => {
	const { url } = useRouteMatch();

	return (
		<UIFlexContainer my={3}>
			<ProfileAsideNavigatorLink exact to={url} text="Profile" />
			<ProfileAsideNavigatorLink  to={`${url}/about`} text="About" />
			<ProfileAsideNavigatorLink  to={`${url}/assets`} text="Assets" />
			<ProfileAsideNavigatorLink  to={`${url}/settings`} text="Settings" />
		</UIFlexContainer>
	);
};

export default ProfileAsideNavigatorContainer;
