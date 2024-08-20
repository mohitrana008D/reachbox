import LoginContent from "./LoginContent"

function Login(){
    return <>
    <div className="md: lg:w-[100vw] h-[84vh] bg-black flex items-center justify-center">
    <div className=" bg-[#111213]  h-[50vh] lg:h-[45vh] w-[70vw] lg:w-[38vw] rounded-xl lg:rounded-2xl border-spacing-1 border-[#23252A] flex items-center justify-center flex-col gap-[3vh]" style={{border: "solid #23252A 2px", }}>
<h1 className='text-xl text-white'>Create a new account</h1>
<div className="" onClick={()=>{loginWithRedirect()}}>loginWithRedirect</div>
   </div>
    </div>
    </>
}
export default Login