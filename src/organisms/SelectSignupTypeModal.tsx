import React from 'react'
import { Modal } from '../molecules/Modal'
import { ComponentSize } from '../atoms/Layout'

const size: ComponentSize = {
  width: 'w-[400px]',
  height: 'h-[300px]',
}

export default (props: { open: boolean; onCancel: () => void }) => {
  return (
    <>
      <Modal
        open={props.open}
        title="회원가입"
        size={size}
        onCancel={props.onCancel}>
        <div className={'h-full grid grid-cols-2'}>
          <div
            className="flex justify-center items-center h-full min-h-[100px] border-2"
            onClick={() => alert('패스워드')}>
            <p className={'text-xl'}>패스워드</p>
          </div>
          <div
            className="flex justify-center items-center h-full border-2"
            onClick={() => alert('깃허브')}>
            <p className={'text-xl'}>깃허브</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

/*
 <div>
        <p className="text-xl" onClick={openPasswordSignupModal}>
          패스워드로 회원가입
        </p>
        <br />
        <p className="text-xl" onClick={openGithubSignupModal}>
          깃허브로 회원가입
        </p>
      </div>
 */
