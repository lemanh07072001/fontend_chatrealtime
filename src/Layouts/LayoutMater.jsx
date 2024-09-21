import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { profileUser } from '../redux/actions/actionAuth';


function LayoutMater() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(profileUser())
    })
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default LayoutMater;