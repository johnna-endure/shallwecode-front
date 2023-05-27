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
        <p className="mb-14 text-center text-3xl font-bold">회원가입</p>
        <div className='w-[450px] m-auto'>
        <p className='text-xs text-right'><span className='text-red-500'>*</span>는 필수 입력사항입니다</p>

        <form className='flex flex-col items-center'>
          <div className='flex flex-col items-center gap-2'>
            {props.type === 'password' && <IdPasswordFormField />}
            <FormField>
              <TopLabelTextInput className="w-[340px] m-auto" labelText={'이메일'} name={'email'} required />
            </FormField>
            <FormField>
              <TopLabelTextInput className="w-[340px]" labelText={'이름'} name={'name'} required />
            </FormField>
            <FormField>
              <TopLabelTextInput className="w-[340px]" labelText={'블로그'} name={'name'} />
            </FormField>
            <FormField>
              <TopLabelTextInput className="w-[340px]" labelText={'깃허브'} name={'name'} />
            </FormField>
          </div>
            <button
              className="rounded mt-10 p-3 w-[340px] text-white bg-[#00c473]"
              onClick={props.onClick}>
              가입하기
            </button>
        </form>
        </div>
    </>
  )
}

const IdPasswordFormField = () => {
  return (
    <>
      <FormField>
        <TopLabelTextInput className="w-[340px]" labelText={'아이디'} name={'loginId'} required />
      </FormField>
      <FormField>
        <TopLabelTextInput className="w-[340px]" labelText={'비밀번호'} name={'password'} required />
      </FormField>
    </>
  )
}
