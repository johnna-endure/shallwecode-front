import React, { MouseEventHandler } from 'react'
import { FormField } from '../molecules/Form'
import { TopLabelTextInput } from '../molecules/TopLabelTextInput'

interface SignupFormProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  type: string
}

/*
email, name, blogUrl, githubUrl
 */
export default (props: SignupFormProps) => {
  return (
    <>
      <div className={'flex justify-center'}>
        <form>
          <div>
            {props.type === 'password' && <IdPasswordFormField />}
            <FormField>
              <TopLabelTextInput labelText={'이메일'} name={'email'} required />
            </FormField>
            <FormField>
              <TopLabelTextInput labelText={'이름'} name={'name'} required />
            </FormField>
            <FormField>
              <TopLabelTextInput labelText={'블로그'} name={'name'} />
            </FormField>
            <FormField>
              <TopLabelTextInput labelText={'깃허브'} name={'name'} />
            </FormField>
          </div>
          <div className={'flex justify-end'}>
            <button
              className={'p-2 rounded bg-gray-400'}
              onClick={props.onClick}>
              가입
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

const IdPasswordFormField = () => {
  return (
    <>
      <FormField>
        <TopLabelTextInput labelText={'아이디'} name={'loginId'} required />
      </FormField>
      <FormField>
        <TopLabelTextInput labelText={'비밀번호'} name={'password'} required />
      </FormField>
    </>
  )
}
