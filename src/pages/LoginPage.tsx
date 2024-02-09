import { OneColumnCenterLayout } from '../components/layout/OneColumnCenterLayout'
import { LoginForm } from '../components/LoginForm'
import { FullScreenLayout } from '../components/layout/FullScreenLayout'

export const LoginPage = () => {
  return <FullScreenLayout>
    <OneColumnCenterLayout>
      <LoginForm />
    </OneColumnCenterLayout>
  </FullScreenLayout>
}
