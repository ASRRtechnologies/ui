import {createStyles, Group, Paper, rem, Text} from '@mantine/core';
import {ArrowDownIcon, ArrowUpIcon, EllipsisVerticalIcon} from "@heroicons/react/24/solid";

const useStyles = createStyles((theme) => ({
    group: {
        width: "200px",
        height: "300px"
    },
    value: {
        fontSize: rem(24),
        fontWeight: 700,
        lineHeight: 1,
    },
    diff: {
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

export function CoreCard() {
    const {classes} = useStyles();

    let stat = {
        diff: 30,
    }

    const DiffIcon = stat.diff > 0 ? ArrowUpIcon : ArrowDownIcon;
    return <Paper withBorder shadow={"sm"} radius={"lg"} p="md" styles={classes.group}>
        <Group position="apart">
            <Text size="md" color="dimmed" className={classes.title}>
                hi
            </Text>
            <EllipsisVerticalIcon width={24}/>
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
            <Text className={classes.value}>{1200}</Text>
            <Text color={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
                <span>{stat.diff}%</span>
                <DiffIcon height={12}/>
            </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
            Compared to previous month
        </Text>
    </Paper>;
}
