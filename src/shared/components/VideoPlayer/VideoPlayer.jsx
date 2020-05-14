import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from 'shared/styled/FlexContainer';
import Backdrop from 'shared/styled/Backdrop';
import { IoIosPlayCircle } from 'react-icons/io';
import { jsx } from "@emotion/core"
import Text from 'shared/styled/Text';

/**@jsx jsx */

const VideoPlayer = () => {
  return (
    <FlexContainer css={{ position: "relative" }}>
      <video src="" poster="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706__340.jpg" width="100%" />
      <Backdrop opacity={0.4} >
        <FlexContainer flexDir="column" align="center" justify="center" sizeHeight="100%">
          <IoIosPlayCircle color="white" size={50} />
          <Text>food app</Text>
        </FlexContainer>
      </Backdrop>
    </FlexContainer>
  )
};

VideoPlayer.propTypes = {

};

export default VideoPlayer;