import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    control: {
        fontWeight: 500,
        display: 'block',
        width: '100%',
        position: 'relative',
        cursor:"pointer",
    },
    noHover:{
      cursor: "default"
    },
    linkWrapper: {
        fontWeight: 500,
        display: 'block',
        textDecoration: 'none',
        padding: `${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '& a':{
            position:"absolute",
            color: "inherit",
            textDecoration: 'inherit',
            left:0,
            top:0,
            width:"100%",
            height:"100%",
        },

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
            textDecoration: 'none',
            color: theme.other.primaryColor,
            '& a':{
                textDecoration: 'none',
            },
        },
    },
    mainLink: {
        fontWeight: 400,
        fontSize: theme.fontSizes.md,
    },
    subLink: {
        fontWeight: 400,
        display: 'block',
        textDecoration: 'none',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        paddingLeft: 31,
        marginLeft: 30,
        fontSize: theme.fontSizes.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        borderLeft: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
            color: theme.other.primaryColor,
            textDecoration: 'none',
        },
    },
    linkActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        color: theme.other.primaryColor,
    },
    actionButton:{
        position: 'absolute',
        right:`${theme.spacing.md}px`,
        top:0,
        transform: 'translateY(60%)',
    },
    chevron: {
        transition: 'transform 200ms ease',
    },
}));