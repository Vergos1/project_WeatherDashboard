import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import s from './userButton.module.scss';

export function UserButton() {
  return (
    <UnstyledButton className={s.user}>
      <Group gap={rem(8)}>
        <Avatar
          src={null} 
          variant="light" 
          color="#742BEC"
          alt="no image here"
          radius="xl"
        />

          <Text size="sm" className={s.username}>
            Ihor Yanchuk
          </Text>

        <IconChevronRight style={{ width: rem(14), height: rem(14), color: 'white' }} stroke={3} />
      </Group>
    </UnstyledButton>
  );
}