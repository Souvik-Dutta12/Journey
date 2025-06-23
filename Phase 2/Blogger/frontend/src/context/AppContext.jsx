import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({children})=>{
 

    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [filter, setFilter] = useState("");

    const fetchBlogs = async ()=>{
        try {
            const {data} = await axios.get("/blogs/blog");
            data.success ? setBlogs(data.data.blogs) : toast.error(data.data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        fetchBlogs();
        const token = localStorage.getItem("token");
        if(token){
            setToken(token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
    },[]);
    
    const value = {
        axios,
        navigate,
        token,
        setToken,
        blogs,
        setBlogs,
        filter,
        setFilter,
    }

    return(

        
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}