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
      <p className="mb-14 text-center text-3xl font-bold">회원가입</p>
      <div className="w-[450px] m-auto">
        <p className="text-xs text-right">
          <span className="text-red-500">*</span>는 필수 입력사항입니다
        </p>

        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-2">
            {props.type === 'password' && <IdPasswordFormField />}
            <FormField>
              <TopLabelTextInput
                className="w-[340px] m-auto"
                labelText={'이메일'}
                name={'email'}
                required
              />
            </FormField>
            <FormField>
              <TopLabelTextInput
                className="w-[340px]"
                labelText={'이름'}
                name={'name'}
                required
              />
            </FormField>
            <FormField>
              <TopLabelTextInput
                className="w-[340px]"
                labelText={'블로그'}
                name={'blogUrl'}
              />
            </FormField>
            <FormField>
              <TopLabelTextInput
                className="w-[340px]"
                labelText={'깃허브'}
                name={'githubUrl'}
              />
            </FormField>
          </div>
          <button className="rounded mt-10 p-3 w-[340px] text-white bg-[#00c473]">
            가입하기
          </button>
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
        <TopLabelTextInput
          className="w-[340px]"
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
      </FormField>
      <FormField>
        <TopLabelTextInput
          className="w-[340px]"
          labelText={'비밀번호'}
          name={'password'}
          required
        />
      </FormField>
    </>
  )
}
