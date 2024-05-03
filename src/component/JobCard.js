import React, { useState, useEffect } from 'react'
import JobCard2 from './JobCard2';
import axios from 'axios'

const JobCard = () => {
    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0);



    useEffect(() => {
        const fetchJobs = async () => {
            const res = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON",
                { "limit": 10, "offset": offset });

            setData([...data, ...res.data.jdList]);
            setData([...data, ...res.data.jdList]);
        }
        fetchJobs();
    }, [offset]);

    const handleInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight) {
                setOffset(prev => prev + 10);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, []);

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // const raw = JSON.stringify({
    //     "limit": 10,
    //     "offset": 0
    // });
    // const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    // };
    // useEffect(() => {
    //     fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    //         .then((data) => data.json())
    //         .then(result => setData(result.jdList))
    //         .catch((error) => console.error(error))
    // }, [])

    return (
        <>
            {data?.map((item) => {
                return (
                    <> <JobCard2 item={item} /> </>
                )
            })}
        </>
    )
}

export default JobCard