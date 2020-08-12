import React, { memo } from "react";
import PropTypes from "prop-types";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";
import useAnimationHoverRotate from "shared/animations/useAnimationHoverRotate";

const NavigatorLink = ({ to, icon: IconLink, children, ...props }) => {
  const theme = useTheme();
  const hoverRotate = useAnimationHoverRotate();
  const activeStyle = { color: theme.colors.primary };
  
  return (
    <hoverRotate.ContainerMotion>
      <NavLink to={to} activeStyle={activeStyle} {...props}>
        <UIFlexContainer alignItems="center" justifyContent="center">
          <hoverRotate.AnimateMotion>
            <IconLink />
          </hoverRotate.AnimateMotion>
          <UIContainer ml="10px">
            <UIText fontSize="normal.2" weight >
              {children}
            </UIText>
          </UIContainer>
        </UIFlexContainer>
      </NavLink>
    </hoverRotate.ContainerMotion>
  );
};

NavigatorLink.propTypes = {
  to : PropTypes.string.isRequired,
  icon : PropTypes.func,
  children : PropTypes.oneOfType([PropTypes.element,PropTypes.string]).isRequired
}

export default memo(NavigatorLink);
