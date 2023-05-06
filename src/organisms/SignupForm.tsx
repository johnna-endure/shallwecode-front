import { TopLabelInput, TopLabelInputProps } from '../molecules/TopLabelInput'
import { Button } from 'flowbite-react'
import React, { FormEventHandler } from 'react'

export type SignupType = 'password' | 'github' | null | undefined

interface SignupFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>
  signType: SignupType | null | undefined
}

export default (props: SignupFormProps) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
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
                required={true}
              />
            </div>
            <div className="mb-2">
              <TopLabelInput
                htmlFor="password"
                labelText="비밀번호"
                name="password"
                type="password"
                required={true}
              />
            </div>
            <div className="mb-2">
              <TopLabelInput
                htmlFor="passwordConfirm"
                labelText="비밀번호 확인"
                name="passwordConfirm"
                required={true}
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
          <Button type={'submit'}>완료</Button>
        </div>
      </form>
    </>
  )
}
