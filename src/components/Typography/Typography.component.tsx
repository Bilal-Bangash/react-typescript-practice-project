import { FC } from 'react'
import { Typography } from '@material-ui/core'
import { TypographyProps } from './Typography.interface'

const TypographyComponent: FC<TypographyProps> = ({
  variant,
  component,
  className,
  children,
}) => {
  return (
    <Typography variant={variant} component={component} className={className}>
      {children}
    </Typography>
  )
}

export default TypographyComponent

TypographyComponent.defaultProps = {
  variant: 'h6',
  component: 'h3',
  children: 'Text will be shown here',
}
