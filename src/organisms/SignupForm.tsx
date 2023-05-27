import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useValidation, ValidationPredicate } from '../hooks/useValidation'

import { userApi } from '../apis/user/userApi'

import { FormField } from '../molecules/Form'
import { TopLabelTextInput } from '../molecules/TopLabelTextInput'

interface SignupFormProps {
  type: 'password' | 'github'
}

export type SignupType = 'password' | 'github'

/*
email, name, blogUrl, githubUrl
 */
const loginIdPredicates: ValidationPredicate[] = [
  {
    rule: (loginId) => {
      // if (loginId) {
      //   return loginId.length > 6
      // } else {
      //   return false
      // }
      return false
    },
    failureMessage: '아이디가 이미 존재합니다',
  },
]
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
  const [loginIdRef, loginIdResult, loginIdValidator] =
    useValidation(loginIdPredicates)

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  return (
    <>
      <FormField failureMessage={loginIdResult.message}>
        <div className={'flex'}>
          <TopLabelTextInput
            inputRef={loginIdRef}
            labelText={'아이디'}
            name={'loginId'}
            required
            onChange={(e) => {
              if (timeoutId) {
                clearTimeout(timeoutId)
              }
              setTimeoutId(setTimeout(() => loginIdValidator(), 100))
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
