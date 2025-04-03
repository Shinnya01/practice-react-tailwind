const SignUp = () => {
    return (
        <div className="w-screen h-screen flex p-0 m-0 box-border">
            
            <div className="w-[55%] h-full overflow-hidden relative">
    
                <img 
                    src="/img/484066318_650729234244933_6513529388520347528_n.png"  
                    className="w-full h-auto  scale-190 -translate-y-7 blur-lg absolute top-0 left-0" 
            
                />
            
                <img 
                    src="/img/484066318_650729234244933_6513529388520347528_n.png"  
                    className="w-full h-auto  scale-140 -translate-y-7 absolute top-0 left-0" 
                  
                />
            </div>
        <div className="w-[45%] bg-rose-950 rounded-l-3xl flex items-center flex-col gap-4 p-10s ">

                <div className="flex flex-col items-center gap-4 m-10 w-full my-20">                

                    <h2 className="text-4xl text-white font-semibold">WELCOME</h2>
                    <h4 className="text-lg text-white ">Login to your account to continue</h4>
                </div>        

                <div className="flex flex-col items-center gap-10 w-full mt-10">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="w-[80%] h-12 p-2 rounded-4xl border border-gray-300 bg-gray-300"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-[80%] h-12 p-2 rounded-4xl border border-gray-300 bg-gray-300"
                    />
                </div>
                
                <div className="flex flex-row justify-between gap-4 w-[70%]">

                    <div>
                    <input type="checkbox"  className="mr-2"/>
                    <label className="text-white">Remember me</label>

                    </div>

                    <a href="" className="text-white hover:underline">Forgot Password</a>
                    
                </div>

                    <button className="w-[80%] h-10 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition duration-200 mt-20">
                        Login
                    </button>

                
                <div>
                    <label className="text-white">Don't have an Account? </label><a href="" className="text-white underline ">Sign up</a>
                </div>

            </div>
        </div>
    );
}

export default SignUp;