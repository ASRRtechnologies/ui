import {createStyles} from "@mantine/core";

export const sideBarHeaderHeight = 100;


export const useStyles = createStyles((theme) => ({
    navbar: {
        display: "flex",
        height: "100vh",
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
        width: "250px",
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            display: "none"
        },
    },
    fixedNavbar: {
        height: "100vh",
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        padding: `${theme.spacing.md}px`,
        paddingBottom: 0,
        top: 0,
        left: 0,
        position: "fixed",
        width: "250px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: `${sideBarHeaderHeight}px 1fr auto auto`,
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },
    userSection: {
        display: "flex",
        flexDirection: "row"
    },
    themeToggle: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "-20px",
    },
    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
}));