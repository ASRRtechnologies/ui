import {createStyles, Group, Paper} from '@mantine/core';

const useStyles = createStyles((theme) => ({}));

export function CoreCard() {
  const { classes } = useStyles();
  return <Paper shadow={"sm"} radius={"xl"}>
    <Group>
        <div>Hi</div>
    </Group>
    CoreCard
  </Paper>;
}
