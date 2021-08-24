import { Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SIGN_IN_ROUTE } from '../constants'

export interface PrivateRouteProps {
  path: string
  component: any
  exact: boolean
}

const PrivateRoute: React.SFC<PrivateRouteProps> = ({
  path,
  component,
  exact,
}) => {
  const location = useLocation()
  const userLogin = useSelector((state: any) => state.userLogin)
  const { refreshToken = '' } = (userLogin && userLogin?.userInfo) || ''
  return refreshToken ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect
      to={{
        pathname: SIGN_IN_ROUTE,
        state: { from: location },
      }}
    />
  )
}

export default PrivateRoute
