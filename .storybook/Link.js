import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Link } from '../src'

storiesOf('Link', module)
  .add(
    'Link component',
    withInfo({
      inline: true,
      text: '<Text> extension for links.',
    })(() => (
      <Link href="https://kaoengine.com" target="_blank">
        Homepage
      </Link>
    ))
  )
  .add('Open in same tab', () => (
    <Link href="https://kaoengine.com" target="_self">
      Open the homepage in same tab
    </Link>
  ))
  .add('Color underline', () => (
    <Link href="https://kaoengine.com" color="primary" bold underline>
      I’m extra Kao Engine
    </Link>
  ))
  .add('Chevrons', () => (
    <Link href="https://kaoengine.com" fontSize={3} hoverline bold chevronRight>
      Explore more
    </Link>
  ))
