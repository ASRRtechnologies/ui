import {AppShell, Header, Navbar} from "@mantine/core";
import React from "react";

export type CoreSidebarProps = {
    logo: React.ReactNode,
    routes: Route[]
}

export type Route = {
    path: string,
    name: string,
    icon: string,
}

export const CoreSidebar = (props: CoreSidebarProps) => {
    return <AppShell
        padding="md"
        navbar={<Navbar width={{ base: 300 }} p="xs">aa</Navbar>}
        header={<Header height={60} p="xs">{props.logo}</Header>}
        styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
    >
        ghello
    </AppShell>
}