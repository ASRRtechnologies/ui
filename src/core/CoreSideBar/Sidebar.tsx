import React from 'react';
import {useStyles} from "./styles";
import {Group, Navbar, ScrollArea} from "@mantine/core";
import {Route} from "./CoreSidebar";
import {LinksGroup} from "./links-group/LinksGroup";
import {CoreLogo} from "../CoreLogo/CoreLogo";
import {StaticImageData} from "next/image";

function DevEnvironment() {
    // if (process.env.NODE_ENV !== "development") {
    //     return null;
    // }

    return (
        <>
            {/*<LinksGroup {...devRoute}/>*/}
        </>
    )
}

function Sidebar(props: { logo: string | StaticImageData; routes: Route[]; logoutRoute: Route }) {
    const {classes} = useStyles();

    const links = props.routes?.map((item) =>
        <LinksGroup {...item} key={item.name}/>);

    return (
        <div className={classes.navbar}>
            <Navbar className={classes.fixedNavbar}>
                <Navbar.Section className={classes.header}>
                    <Group position="left">
                        <CoreLogo src={props.logo} width={180}/>
                    </Group>
                </Navbar.Section>

                <Navbar.Section grow className={classes.links} component={ScrollArea}>
                    <div className={classes.linksInner}>{links}</div>
                </Navbar.Section>

                <Navbar.Section className={classes.links}>
                    <DevEnvironment/>
                    <LinksGroup {...props.logoutRoute}/>
                </Navbar.Section>

                <Navbar.Section className={classes.footer}>
                    <Group position="apart">
                        {/*<UserButton/>*/}
                    </Group>
                </Navbar.Section>
            </Navbar>
        </div>
    );
};
export default Sidebar;
