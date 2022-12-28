import { useEffect, useState } from "react";
import { AxiosInstance } from "../Utils/API/AxiosInstance";


const useProjects = () => {

    const [projects, setProjects] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(()=>{
        const run = async () => {
            const {data, status} =  AxiosInstance.get('projects')
        }

        run()
    },[])

    return (
        <div>
            
        </div>
    );
};

export default useProjects;