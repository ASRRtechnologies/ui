import {AppShell, Group, Header, Navbar} from "@mantine/core";
import React, {SVGProps} from "react";
import {Icon} from "@tabler/icons-react";
import Sidebar from "./Sidebar";
import {StaticImageData} from "next/image";

export type CoreSidebarProps = {
    logo: string | StaticImageData,
    routes: Route[]
    logoutRoute: Route
}

export type Route = {
    name: string,
    path: string,
    icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { title?: string, titleId?: string }>
}

export const CoreSidebar = (props: CoreSidebarProps) => {
    const sidebar = <Sidebar logo={props.logo} routes={props.routes} logoutRoute={props.logoutRoute}/>

    return <AppShell
        padding="md"
        navbar={sidebar}
        header={<Header height={100} p="xs">aa</Header>}
        styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
    >
        Contents
    </AppShell>
}