import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setuser] = useState()
    const [message, setmessage] = useState()
    const navigate = useNavigate()
    



//--------------------> Sign up user --------------------------------------------------------------------------------->
    const signup = async (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }


        const checkuser = await fetch(`http://localhost:5000/user/?email=${data.email}`, { method: "GET" })

        if (checkuser.ok) {
            const user =  await checkuser.json()
            if (user.length > 0) {
                setmessage("already exits user")
            }
            else {
                const respone = await fetch(`http://localhost:5000/user`, config)
                if (respone.ok) {
                    const user = await respone.json()
                    localStorage.setItem("user", JSON.stringify(user))
                    setmessage("successfully procced")
                    setTimeout(() => {
                        navigate('/setup')
                    }, 3000)

                }
                else {
                    console.log("something went wrong")
                }
            }
        }
        else {
            setmessage("something went wrong")
        }
    }


 // ------------------> set password --------------------------------------------------------------------------------->

    const setupPassword = async (data) => {

        const config = {
            method: "PUT",
            headers: {
                "COntent-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(`http://localhost:5000/user/${data?.id}`, config)
        if (response.ok) {
            const user = await response.json()
            setuser(user)
           setmessage("sucessfully proceed")
            localStorage.setItem("user", JSON.stringify(user))
           setTimeout(() => {
            navigate("/homescreen")
           }, 3000);
        }
        else{
            setmessage("something went wrong")
        }
    }


    //-------------> log In user ------------------------------------------------> 


    const login =async(data)=>{


        const response = await fetch(`http://localhost:5000/user/?email=${data.email}&password=${data.password}`,{method:"GET"})
        debugger
        if(response.ok)
        {
            const user = await response.json()
            if(user.length>0)
            {
               setTimeout(() => {
                navigate('/homescreen')
                
               }, 3000);
            }
            else{
              setTimeout(() => {
                setmessage("passwords incorect")
              }, 3000);
            }
        }
       
    }




//----------------------> check data base user 
    const getuser = async () => {
        const local = localStorage.getItem("user")
        if (local) {
            const user = JSON.parse(local)
            const respone = await fetch(`http://localhost:5000/user/?email=${user.email}&password=${user.password}`, { method: "GET" })
            if (respone.ok) {

                const user = await respone.json()

                if (user.length > 0) {
                    
                    setuser(user)
                }
                else {
                    localStorage.removeItem("user")
                    navigate("/")
                }
            }
        }
    }


    useEffect(() => {
        getuser()
    }, [])



    //--------------------> log out User --------------------------------------------------------------------------> 
    const logout=()=>{
        localStorage.removeItem("user")
        setuser(null)
        navigate('/')

    }

    return (
        <AuthContext.Provider value={{

            signup,
            user,
            message,
            setmessage,
            setupPassword,
            login,
            logout

        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext