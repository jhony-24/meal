import React from "react";
import dayjs from "dayjs";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIText } from "shared/styled/UIText.styled";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";
import ProgressStyled from "../VideoPlayerStyled/ProgressStyled";

export default () => {
	const {
		currentTime, duration, percentage, bufferPercentage, } = useVideoPlayerContext();
	return (
		<UIFlexContainer	width="100%"	mx="10px"	justifyContent="space-between"	alignItems="center" >
			<UIText color="primaryLight" fontSize="small.1">
				{timerVideo(currentTime)}
			</UIText>
			<ProgressStyled.Container>
				<ProgressStyled.Scrollbar absolute percentage={bufferPercentage} />
				<ProgressStyled.Scrollbar percentage={percentage} thumb />
			</ProgressStyled.Container>
			<UIText color="primaryLight" fontSize="small.1">
				{timerVideo(duration)}
			</UIText>
		</UIFlexContainer>
	);
};

// format the time
const timerVideo = (value : any) =>	dayjs().startOf("day").second(value).format("mm:ss");
