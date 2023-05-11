import React, { FormEvent, FormEventHandler, useRef, useState } from 'react'
import { TopLabelInput } from '../molecules/TopLabelInput'
// import { Button } from 'flowbite-react'
import { InputMessage } from '../type/Input'
import { ValidationRule } from '../type/Form'

export type SignupType = 'password' | 'github' | null | undefined

interface SignupFormProps {
  // formRef: RefObject<HTMLFormElement>
  onSubmit: FormEventHandler<HTMLFormElement>
  signType: SignupType | null | undefined
}

export default (props: SignupFormProps) => {
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const passwordConfirmInputRef = useRef<HTMLInputElement>(null)
  const [passwordInputMessage, setPasswordInputMessage] =
    useState<InputMessage>({
      color: 'gray',
      helperText: '',
    })
  const [passwordConfirmInputMessage, setPasswordConfirmInputMessage] =
    useState<InputMessage>({
      color: 'gray',
      helperText: '',
    })

  const validationRules: ValidationRule[] = [
    {
      predicate: () => {
        return (
          passwordInputRef.current?.value ===
          passwordConfirmInputRef.current?.value
        )
      },
      onFailure: () => {
        setPasswordInputMessage({
          color: 'failure',
          helperText: '비밀번호가 일치하지 않습니다',
        })
        setPasswordConfirmInputMessage({
          color: 'failure',
          helperText: '비밀번호가 일치하지 않습니다',
        })
      },
      onValid: () => {
        setPasswordInputMessage({
          color: 'gray',
          helperText: '',
        })
        setPasswordConfirmInputMessage({
          color: 'gray',
          helperText: '',
        })
      },
    },
  ]

  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          const ok = validationRules.every((r, i) => {
            if (!r.predicate()) {
              r.onFailure()
              return false
            }
            r.onValid()
            return true
          })

          if (ok) {
            props.onSubmit(e)
          }
        }}>
        {/*패스워드 가입인 경우*/}
        {props?.signType === 'password' ? (
          <>
            <div className="mb-2">
              <TopLabelInput
                htmlFor="loginId"
                labelText="로그인 아이디"
                id="loginId"
                name="loginId"
                placeholder="로그인시 아이디"
                onChange={(e) => {
                  // console.log('change : ', e.target.value)
                  // 중복확인
                }}
                required={true}
              />
            </div>
            <div className="mb-2">
              <TopLabelInput
                inputRef={passwordInputRef}
                htmlFor="password"
                labelText="비밀번호"
                name="password"
                type="password"
                required={true}
                color={passwordInputMessage.color}
                helperText={passwordInputMessage.helperText}
              />
            </div>
            <div className="mb-2">
              <TopLabelInput
                inputRef={passwordConfirmInputRef}
                htmlFor="passwordConfirm"
                labelText="비밀번호 확인"
                name="passwordConfirm"
                type="password"
                required={true}
                color={passwordConfirmInputMessage.color}
                helperText={passwordConfirmInputMessage.helperText}
              />
            </div>
          </>
        ) : null}

        <div className="mb-2">
          <TopLabelInput
            htmlFor="email"
            labelText="이메일"
            name="email"
            placeholder="user@email.com"
            required={true}
          />
        </div>
        <div className="mb-2">
          <TopLabelInput
            htmlFor="name"
            labelText="이름"
            name="name"
            placeholder="이름을 입력해주세요"
            required={true}
          />
        </div>
        <div className="mb-2">
          <TopLabelInput
            htmlFor="blogUrl"
            labelText="블로그"
            name="blogUrl"
            placeholder="보여주고 싶은 블로그가 있다면 입력해주세요"
            required={false}
          />
        </div>
        <div className="mb-2">
          <TopLabelInput
            htmlFor="githubUrl"
            labelText="깃허브"
            name="githubUrl"
            placeholder="깃허브"
            required={false}
          />
        </div>
        <div className={'pt-2 flex justify-end'}>
          <button className={'btn'}>완료</button>
        </div>
      </form>
    </>
  )
}
