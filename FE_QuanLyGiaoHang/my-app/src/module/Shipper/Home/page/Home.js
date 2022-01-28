import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header/Header'
import ListPost from '../components/ListPost/ListPost'
import { getCategory, getListPost } from '../reducer/actions'

export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])
    useEffect(()=>{
        dispatch(getListPost())
    },[dispatch])
    return (
        <div>
            <Header />
            <ListPost />
        </div>
    )
}
