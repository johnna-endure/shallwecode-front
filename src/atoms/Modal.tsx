export default () => {
  return (
    <>
      <div className="absolute top-0 w-screen h-screen bg-gray-500 opacity-50">
        <div className={'flex w-screen h-screen justify-center items-center'}>
          <div
            className={
              'w-[60vw] h-[80vh] min-w-[400px] max-h-[800px] bg-amber-50 rounded-2xl overflow-y-scroll'
            }>
            {/*/!*타이틀*!/*/}
            <div className={'flex items-center pl-4 w-full h-16 bg-green-200'}>
              <p className={'text-3xl'}>Title</p>
            </div>
            {/*/!*컨텐츠*!/*/}
            <div className={'bg-black w-full h-[65vh] overflow-y-scroll'}></div>
          </div>
        </div>
      </div>
    </>
  )
}
