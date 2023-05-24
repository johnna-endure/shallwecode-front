import React, { MouseEventHandler } from 'react'
import { FormField } from '../molecules/Form'
import { TopLabelTextInput } from '../molecules/TopLabelTextInput'

interface SignupFormProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
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
            <FormField
              input={
                <TopLabelTextInput
                  labelText={'이메일'}
                  name={'email'}
                  required
                />
              }
            />
            <FormField
              input={
                <TopLabelTextInput labelText={'이름'} name={'name'} required />
              }
            />
            <FormField
              input={<TopLabelTextInput labelText={'블로그'} name={'name'} />}
            />
            <FormField
              input={<TopLabelTextInput labelText={'깃허브'} name={'name'} />}
            />
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
