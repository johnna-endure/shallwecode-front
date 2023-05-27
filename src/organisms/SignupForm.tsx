import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { userApi } from '../apis/user/userApi'

import { FormField } from '../molecules/Form'
import { TopLabelTextInput } from '../molecules/TopLabelTextInput'
import { authenticationApi } from '../apis/authentication/authenticationApi'

export type SignupType = 'password' | 'github'

interface SignupFormProps {
  type: SignupType
}

/*
email, name, blogUrl, githubUrl
 */
export default (props: SignupFormProps) => {
  const navigator = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body: any = {}
    for (const [k, v] of formData.entries()) {
      body[k] = v.toString()
    }
    const isSuccess = await userApi.signup(body, props.type)
    if (isSuccess) {
      alert('성공')
      navigator('/signin')
    } else {
      alert('실패')
    }
  }
  return (
    <>
      <div className={'flex justify-center'}>
        <form onSubmit={handleSubmit}>
          <p className={'text-2xl'}>회원가입</p>
          <div className={'mt-4'}>
            {props.type === 'password' && <IdPasswordFormField />}
            <FormField>
              <TopLabelTextInput labelText={'이메일'} name={'email'} required />
            </FormField>
            <FormField>
              <TopLabelTextInput labelText={'이름'} name={'name'} required />
            </FormField>
            <FormField>
              <TopLabelTextInput labelText={'블로그'} name={'blogUrl'} />
            </FormField>
            <FormField>
              <TopLabelTextInput labelText={'깃허브'} name={'githubUrl'} />
            </FormField>
          </div>
          <div className={'flex justify-end'}>
            <button className={'p-2 rounded bg-gray-400'}>가입</button>
          </div>
        </form>
      </div>
    </>
  )
}

const IdPasswordFormField = () => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const [loginIdFailureMessage, setLoginIdFailureMessage] = useState<string>()
  return (
    <>
      <FormField failureMessage={loginIdFailureMessage}>
        <div className={'flex'}>
          <TopLabelTextInput
            labelText={'아이디'}
            name={'loginId'}
            required
            onChange={(e) => {
              if (timeoutId) {
                clearTimeout(timeoutId)
              }
              setTimeoutId(
                setTimeout(async () => {
                  const isValid = await authenticationApi.checkLoginId(
                    e.target.value
                  )

                  if (!isValid) {
                    setLoginIdFailureMessage('이미 존재하는 아이디입니다')
                  } else {
                    setLoginIdFailureMessage('')
                  }
                }, 100)
              )
            }}
          />
        </div>
      </FormField>
      <FormField>
        <TopLabelTextInput labelText={'비밀번호'} name={'password'} required />
      </FormField>
    </>
  )
}
