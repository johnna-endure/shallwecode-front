import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../molecules/Modal'
import { ComponentSize } from '../atoms/Layout'
import {ReactComponent as LogoGithub} from '../assets/logo_github.svg'
import {ReactComponent as IconSmile} from '../assets/icon_wink.svg'

const size: ComponentSize = {
  width: 'w-[480px]',
  height: 'h-[380px]',
}

export default (props: { open: boolean; onCancel: () => void }) => {
  const navigator = useNavigate()
  return (
    <>
      <Modal
        open={props.open}
        title="회원가입"
        size={size}
        onCancel={props.onCancel}>
        <div className='flex items-center gap-3 h-full'>
          <div
            className="flex flex-col items-center justify-center gap-4 p-6 rounded  w-1/2 h-3/4 bg-[#f9f9f9] cursor-pointer hover:-translate-y-4 hover:transition-all hover:shadow-2xl"
            onClick={() => navigator('/signup/password')}>
              <IconSmile className='w-16 h-16'/>
            <p className={'text-xl'}>직접 가입하기</p>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-4 p-6 rounded  w-1/2 h-3/4 bg-[#f9f9f9]  cursor-pointer hover:-translate-y-4 hover:transition-all hover:shadow-2xl"
            onClick={() => navigator('/signup/github')}>
              <LogoGithub className='w-16 h-16'/>
            <p className={'text-xl'}>깃허브로 가입하기</p>
          </div>
        </div>
      </Modal>
    </>
  )
}
