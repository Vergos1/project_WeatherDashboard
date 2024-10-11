import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import { AppShell, Burger, Group, Skeleton, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function AppLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        layout="alt"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppHeader opened={opened} toggle={toggle} />
        <AppShell.Navbar p="md">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text>Navbar</Text>
          </Group>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main pt={85}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      {/* <AppHeader />
      <main className="app-main">
        <Outlet />
      </main> */}
    </>
  );
}
