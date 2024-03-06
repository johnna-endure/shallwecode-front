import { LoginForm } from '../components/form/LoginForm'
import { HeadlessSingleContentTemplate } from '../template/HeadlessSingleContentTemplate'

export const LoginPage = () => {
  return (
    <HeadlessSingleContentTemplate>
      <LoginForm />
    </HeadlessSingleContentTemplate>
  )
}
