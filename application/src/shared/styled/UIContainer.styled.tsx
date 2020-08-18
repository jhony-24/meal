import styled from "themes/styled";
import { LayoutProps, PositionProps, FlexBasisProps, SpaceProps, layout, position, flex, space, compose } from "styled-system";
import variables from "./styledConstants/variables";
import { layoutContainerVariants } from "themes/themesVariants/layouts.variants";

/**
 * Container layout personalizable
 */
type UIContainerProps = LayoutProps & PositionProps & FlexBasisProps & SpaceProps & {
		isDrawer?: boolean;	
		heightToolbar?: string;
	} & any;
	
export const UIContainer = styled.div<UIContainerProps>`
	padding-top : ${props=>props.isDrawer && variables.heightToolbar};
	${layoutContainerVariants};
	${compose(
		layout,
		position,
		flex,
		space,
	)};
`
/**
 * Container with fixed pool on the head
 */
export const UIContainerLayoutFixed = styled(UIContainer)((props : UIContainerProps) => ({
	height: props.heightToolbar || variables.heightToolbar ,
}));
