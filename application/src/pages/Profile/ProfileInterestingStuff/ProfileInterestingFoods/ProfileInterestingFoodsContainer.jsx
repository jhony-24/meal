import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import ProfileInterestingFoodsItem from "./ProfileInterestingFoodsItem";
import { UIScrollBarList } from "shared/styled/UIScrollBarList";
import { UIText } from "shared/styled/UIText";

const ProfileInterestingFoodsContainer = () => {
	return (
		<UIContainer pb={5}>
			<UIContainer pb={3}>
				<UIText weight fontSize="normal.3">Interesting</UIText>
			</UIContainer>
			<UIScrollBarList horizontal>
				{Array(5)
					.fill(0)
					.map((e, i) => (
						<ProfileInterestingFoodsItem
							key={i}
							image="https://cdn.pixabay.com/photo/2020/07/19/09/55/man-5419522__340.jpg"
						/>
					))}
			</UIScrollBarList>
		</UIContainer>
	);
};

export default ProfileInterestingFoodsContainer;
