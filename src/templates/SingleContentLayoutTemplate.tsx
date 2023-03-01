import LoginForm from '../organisms/LoginForm'

type LayoutProps = {
  width: string
  content: JSX.Element
}

export default function (props: LayoutProps) {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {props.content}
      </div>
    </div>
  )
}
