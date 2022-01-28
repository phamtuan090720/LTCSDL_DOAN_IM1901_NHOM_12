import React from 'react'
import { useDispatch } from 'react-redux'
import FormCreatePost from '../components/FormCreatePost/FormCreatePost'
import Header from '../components/Header/Header'
import ListPost from '../components/ListPost/ListPost'
import { getListPost } from '../reducer/actions'

export default function Home() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = React.useState(false)
    React.useEffect(() => {
        dispatch(getListPost())
    }, [dispatch])
    return (
        <div>
            <Header openFormCreate={() => setIsOpen(true)} />
            <ListPost />
            <FormCreatePost visible={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}
