import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { BlockLink, BackgroundImage, Box, Text } from '../src'

storiesOf('BlockLink', module).add(
  'BlockLink',
  withInfo({
    inline: true,
    text: `<BlockLink /> is a styled-components wrapper of <Link /> component to remove text-decoration and color styles, and set display as block.`,
  })(() => (
    <BlockLink href="https://kaoengine.com" target="_blank">
      <BackgroundImage
        src="https://kaoengine.com/social-photo_2.jpg'"
        width={640}
      >
        <Box p={4}>
          <Text align="center" color="white">
            Click to open kaoengine.com in a new tab!
          </Text>
        </Box>
      </BackgroundImage>
    </BlockLink>
  ))
)
