import instance from "../../axios/axiosInstance "
import { createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk(
    'register',
    async (data, thunkAPI) => {

        try {
            // Đăng ký thành công!
            const response = await instance.post('register', data);  
            toast.success('Đăng ký thành công!');
            return await response.data; 
        } catch (error) {
            // Đăng ký thất bại
            toast.error('Đăng ký thất bại!');
            return thunkAPI.rejectWithValue(error.response.data); 
        }
    },
)

export const loginUser = createAsyncThunk(
    'login',
    async (data, thunkAPI) => {
        try{
            // Đăng nhập thành công!
            const response = await instance.post('login', data);  
            if(response.data.success == true){
                toast.success(response.data.message);
                return response.data; 
            }
           
           
        }catch (errors) {
            // Đăng nhập thất bại
            if(errors.response.data.success == false){
                toast.error(errors.response.data.message);
            }
            return thunkAPI.rejectWithValue(errors.response.data); 
        }
    }
)


export const profileUser = createAsyncThunk(
    'profile',
    async (data, thunkAPI) => {
        try{
            const token = localStorage.getItem('authToken');

           if(token){
             // Đăng nhập thành công!
             const response = await instance.get('profile',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });  
            console.log(response);
           }
           
           
        }catch (errors) {
            // Đăng nhập thất bại
            if(errors.response.data.success == false){
                toast.error(errors.response.data.message);
            }
            return thunkAPI.rejectWithValue(errors.response.data); 
        }
    }
)
