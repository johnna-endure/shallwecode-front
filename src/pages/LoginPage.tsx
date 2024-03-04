import { OneColumnCenterLayout } from '../atoms/layout/OneColumnCenterLayout'
import { FullScreenLayout } from '../atoms/layout/FullScreenLayout'
import { LoginForm } from '../components/form/LoginForm'

export const LoginPage = () => {
  return (
    <FullScreenLayout>
      <OneColumnCenterLayout>
        <LoginForm />
      </OneColumnCenterLayout>
    </FullScreenLayout>
  )
}
