import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import FormAdd from '../components/FormAdd';
import movieList from '../assets/data.json';

const List = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        setData(d => [...d, ...movieList]);
    },[])

    useEffect(()=>{
        setLoading(false);
    },[loading,data])

    const addMovie = (newMovie) => {
        setData(d => [...d,newMovie]);
    }

    if(loading){
        return <div>Loading...</div>    
    }else{
        return (
            <div className='row appContent'>
                <FormAdd addMovie={addMovie}/>
            {
                data.map( m =>
                    <div className='col-sm-2'>
                        <Card key={m.Title+m.Year} movie={m}/>
                    </div> 
                )
            }
            </div>
        )
    }
};

export default List;