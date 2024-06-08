import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";

function ChatLoading() {
  return (
    // <Stack>
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    //   <Skeleton height="45px" />
    // </Stack>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <CircleLoader
        color='#3645d6'
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default ChatLoading