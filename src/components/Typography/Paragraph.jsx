import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from './'

const Paragraph = ({ variant, fontSize, lineHeight, ...props }) => (
  <Typography
    as='p'
    fontSize={fontSize || `paragraph.${variant}`}
    lineHeight={lineHeight || `paragraph.${variant}`}
    {...props}
  />
)

Paragraph.defaultProps = {
  variant: 'md',
  fontWeight: 'paragraph',
  color: 'typography.paragraph'
}

Paragraph.propTypes = {
  ...Typography.propTypes,
  variant: PropTypes.oneOf(['sm', 'md'])
}

export default Paragraph
