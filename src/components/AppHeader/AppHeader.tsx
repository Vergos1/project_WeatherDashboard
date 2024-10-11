import s from "./appHeader.module.scss";
import { Group, Burger, AppShell, TextInput, rem } from "@mantine/core";
import { UserButton } from "../UserButton/UserButton";
import { IconSearch } from "@tabler/icons-react";

export default function AppHeader({
    opened,
    toggle,
}: {
    opened: boolean;
    toggle: () => void;
}) {
    const icon = <IconSearch style={{ width: rem(20), height: rem(20), color: "white" }} stroke={2.5} />;

    return (
        <AppShell.Header className={s.header}>
            <Group h="100%" w="100%" px="md" flex={2}>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Group justify="space-between" style={{ flex: 1 }}>
                    <TextInput placeholder="Search City...." size="sm" w="35%" leftSection={icon} />
                    <UserButton />
                </Group>
            </Group>
        </AppShell.Header>
    );
}
