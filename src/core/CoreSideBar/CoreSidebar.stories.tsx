import {Meta, StoryObj} from "@storybook/react";
import {CoreSidebar} from "./CoreSidebar";
import {CoreLogo} from "../CoreLogo/CoreLogo";
import Logo from "../../../public/asrr.svg"

const meta: Meta<typeof CoreSidebar> = {
    title: 'Example/CoreSidebar',
    component: CoreSidebar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<typeof CoreSidebar>;

export const Primary: Story = {
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        logo: <CoreLogo src={Logo}/>
    }
}

