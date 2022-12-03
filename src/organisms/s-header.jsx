export default function (){
    return(
        <div className="flex justify-between items-center w-full bg-emerald-500">
            <div className="px-8 py-6 text-white font-bold">Shall We Code?</div>
            <input className="p-6 text-white" type="button" name="login" value="Login" onClick={() => alert('로그인 클릭')} />
        </div>
    )
}