import React from "react";
import PropTypes from "prop-types";
import { UIAvatar, UIAvatarImage } from "shared/styled/UIAvatar";

function AvatarWallpaper({ image, avatarIcon, sizeAvatar, ...props }) {
  return (
    <UIAvatar {...props} {...props}>
      {avatarIcon ? (
        avatarIcon
      ) : (
        <UIAvatarImage src={image} {...props} />
      )}
    </UIAvatar>
  );
}

AvatarWallpaper.propTypes = {
  image: PropTypes.string.isRequired,
  sizeAvatar: PropTypes.number,
  avatarIcon: PropTypes.element,
};

AvatarWallpaper.defaultProps = {
  image: "",
};

export default AvatarWallpaper;
