import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={60}>
      {/* <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=4" /> */}
      <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=2" />
      {/* <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=1" /> */}
    </Stack>
  );
}
