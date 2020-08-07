import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { UIText } from "shared/styled/UIText";
import { UIContainer } from "shared/styled/UIContainer";
import ModalCopyLinkButton from "./ModalCopyLinkButton";

const UIModalInputPreviewLink = styled.div`
	border-radius: 10px;
	padding: 15px;
	display: flex;
	align-items: center;
	width: 100%;
	border: 1px solid ${props=>props.theme.colors.grayDarkBorder};
	input {
		width: 100%;
		margin-right: 20px;
		color : ${props=>props.theme.colors.dark};
	}
	> :last-child {
		flex: none;
		color: rgba(230,60,90,.8);
		cursor: pointer;
	}
`;

const ModalShareLinkInputPreview = ({ linkShare }) => {
	return (
		<Fragment>
			<UIContainer marginBottom="1em">
				<UIText weight size="small" variant="dark">
					Or copy link
				</UIText>
			</UIContainer>
			<UIModalInputPreviewLink>
				<input defaultValue={linkShare} spellCheck={false} />
				<ModalCopyLinkButton linkShare={linkShare} />
			</UIModalInputPreviewLink>
		</Fragment>
	);
};

export default ModalShareLinkInputPreview;
