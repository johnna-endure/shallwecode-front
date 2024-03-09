import { LoginForm } from '../components/form/LoginForm'
import { FullScreenLayout } from '../layout/FullScreenLayout'
import { OneColumnCenterLayout } from '../layout/OneColumnCenterLayout'

export const LoginPage = () => {
  return (
    <FullScreenLayout>
      <OneColumnCenterLayout>
        <LoginForm />
      </OneColumnCenterLayout>
    </FullScreenLayout>
  )
}
