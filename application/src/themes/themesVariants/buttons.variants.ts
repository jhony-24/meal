import { variant } from "styled-system";

export const buttonsVariantNormal = variant({
	variants: {
		primary: {
			bg: "primary",
			color: "primaryLight",
		},
		outline: {
			color: "primary",
			border: "1px solid currentColor",
			fontWeight: "bold",
		},
		default: {
			color: "neutralLightMedium",
			bg: "neutralLight",
		},
	},
});