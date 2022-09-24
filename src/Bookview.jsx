import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

function Bookview() {
    const params = useParams();
    const [bookData, setBookData] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        loadBook();
    },[])

    let loadBook = async () => {
        try {
            setLoading(true)
            let book = await axios.get(`https://6290209e665ea71fe12da309.mockapi.io/library/${params.id}`)
            setBookData(book.data)
            setLoading(false)
        } catch (error) {
            
        }
    }
  return (
    <>
        <h2>Book Name : {isLoading? "Loading..." : bookData.bookName}</h2>
        <h3>Author Name : {isLoading? "Loading..." : bookData.authorName}</h3>
        <h3>ISBN CODe : {isLoading? "Loading..." : bookData.isbnCode}</h3>
        <h3>STATUS : {isLoading? "Loading..." : bookData.status}</h3>
        <h3>ID : {isLoading? "Loading..." : bookData.id}</h3>
    </>
  )
}

export default Bookview