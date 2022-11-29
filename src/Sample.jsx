import Test from "./Test";
export default ({onChange, name}) => {

    //jsx로 props 받는 경우
    const jsx = <h1>hello, world {name}</h1>

    // props
    const props = {
        type: 'text',
        placeholder: '인풋',
        onChange: onChange
    }

    // 잘못된 예 : jsx에서만 중괄호 사용해서 변수 받음, 아래는 객체의 onchange 키의 값으로 들어 가는 것
    // jsx : 닫는 태그가 있어야 한다
    const props2 = {
        type: 'text',
        placeholder: '인풋',
        onChange: {onChange}
    }

    return(
        <>
        <Test {...props}/>
        {jsx}
        </>
    )
}