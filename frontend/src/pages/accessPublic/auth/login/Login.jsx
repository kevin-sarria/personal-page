import { Alert } from '../../../../components';
import { LoginPage } from './LoginPage';

export const Login = () => {
  return (
    <>
      <LoginPage />
      <Alert type='auth' />
    </>
  )
}
