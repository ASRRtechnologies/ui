import {Meta, StoryObj} from "@storybook/react";
import {CoreSidebar} from "./CoreSidebar";
import Logo from "../../../public/asrr.svg"
import {ArrowLeftIcon, HomeIcon, Squares2X2Icon} from "@heroicons/react/24/outline";

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
        logo: Logo,
        routes: [
            {
                name: "Home",
                path: "/",
                icon: HomeIcon
            },
            {
                name: "Dashboard",
                path: "/dashboard",
                icon: Squares2X2Icon
            }
        ],
        logoutRoute: {
            name: "Logout",
            path: "/logout",
            icon: ArrowLeftIcon
        }
    }
}

