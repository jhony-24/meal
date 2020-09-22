import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import ChipSimple from "shared/components/dumbs/ChipSimple";
import StoryComponentProps from "__stories__/@types/StoryComponentProps";
import ChipUserFollower from "shared/components/dumbs/ChipUserFollower";

export default {
	title: "Forms/ChipSimple",
	component: ChipSimple,
	argTypes: {
		noRemove: {
			control: {
				type: "boolean",
			},
		},
	},
} as Meta;

type StoryChipSimpleProps = StoryComponentProps<typeof ChipSimple>;
const Template: StoryChipSimpleProps = (args) => (
	<ChipSimple {...args}>This is a chip simple</ChipSimple>
);

export const Default = Template.bind({});

export const CChipUserFollower : StoryComponentProps<typeof ChipUserFollower> = (args) => {
	return <ChipUserFollower {...args} />;
};
CChipUserFollower.args = {
	avatar:"https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg" ,
	username:"User Mark Jhonson",
	description:"Software developer in facebook",
	buttonContent:"Follow" ,
}

CChipUserFollower.argTypes = {
	avatar : {
		control : {
			type : "string"
		}
	},
	username : {
		control : {
			type : "string"
		}
	},
	description : {
		control : {
			type : "string"
		}
	},
	buttonContent : {
		control : {
			type : "string"
		}
	},
}
