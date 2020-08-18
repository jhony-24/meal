import { memo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import buttonsVariant from "themes/themesVariants/buttons.variants";
import { MThemes } from "themes/themes.types";

type UIButtonProps = {
	block?: boolean;
	variant?: MThemes.ThemesVariantButtonsTypes;
};

export const UIButton = memo(styled.button<UIButtonProps>`
	&:hover {
		opacity: 0;
	}
	padding: 10px 20px;
	transition: opacity 0.1s;
	border-radius: 15px;
	font-size: 13px;
	${(props) =>
		props.block &&
		css`
			display: block;
			width: 100%;
		`};
	${buttonsVariant};
`);