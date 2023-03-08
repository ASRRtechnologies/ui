import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {LinksGroupProps} from "./types";
import {ActionIcon, Box, Collapse, Group, Text, ThemeIcon} from "@mantine/core";
import {Icon} from "@tabler/icons-react";
import {useRouter} from "next/router";
import Link from "next/link";

export function LinksGroup(props: LinksGroupProps) {
    const router = useRouter();
    const {classes, cx, theme} = useStyles();
    // const hasNestedPaths = Array.isArray(props.nestedPaths);
    const [opened, setOpened] = useState(true);
    const Icon = props.icon;
    const isSelectedMainRoute = router.pathname === props.path;
    //
    // useEffect(() => {
    //     const isSelectedSubRoute = props.nestedPaths?.some(route => route.path === router.pathname) ?? false
    //
    //     if (isSelectedSubRoute) {
    //         setOpened(true);
    //     }
    // }, [props.nestedPaths, router.pathname]);

    // const items = (hasNestedPaths ? props?.nestedPaths ?? [] : []).map((nestedRoute) => {
    //     const isSelected = router.pathname === nestedRoute.path;
    //     if (nestedRoute.path)
    //         return (
    //             <Link onClick={props.onClickNestedPaths} href={nestedRoute.path} key={nestedRoute.title}
    //                   className={cx(classes.subLink, isSelected && classes.linkActive)}>
    //                 {nestedRoute.title}
    //             </Link>
    //         )
    //     return null;
    // });

    return (
        <>
            <div className={classes.control} onClick={props.onClick}>

                <Group position="apart" spacing={0}
                       className={cx(classes.linkWrapper, isSelectedMainRoute && classes.linkActive, !props.path && classes.noHover)}>
                    {props?.path ? <Link href={props.path}/> : null}

                    {Icon && (
                        <Box sx={{display: 'flex'}}>
                            <Icon width={24} color={theme.other.primaryColor}/>
                            <Text ml="md" className={cx(classes.mainLink)}>{props.name}</Text>
                        </Box>
                    )}
                </Group>

                {/*{hasNestedPaths && (*/}
                {/*    <div className={classes.actionButton}>*/}
                {/*        <ActionIcon onClick={() => setOpened((o) => !o)}>*/}
                {/*            <IconChevronRight*/}
                {/*                className={classes.chevron} size={14} stroke={1.5}*/}
                {/*                style={{transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none'}}/>*/}
                {/*        </ActionIcon>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
            {/*{hasNestedPaths ? <Collapse in={opened}>{items}</Collapse> : null}*/}
        </>
    );
}

export default LinksGroup;
