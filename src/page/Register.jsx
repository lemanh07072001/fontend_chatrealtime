import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useSelector, useDispatch } from 'react-redux';
import { memo } from "react";
import { registerUser } from '../redux/actions/actionAuth';

import 'react-toastify/dist/ReactToastify.css';



const schema = yup.object().shape({
    // Email validate
    name: yup.string(
        "Họ tên phải là kiểu chuỗi"
    ).required(
        "Vui lòng nhập họ tên"
    ),

    // Email validate
    email: yup.string(
        "Email phải là kiểu chuỗi"
    ).email(
        "Định dạng email không hợp lệ"
    ).required(
        "Vui lòng nhập Email"
    ),

    // Password validate
    password: yup.string(
        "Mật khẩu phải là kiểu chuỗi"
    ).min(8,
        "Mật khẩu phải lớn hơn 8 ký tự"
    ).max(32,
        "Mật khẩu phải nhỏ hơn 32 ký tự"
    ).required(
        "Vui lòng nhập mật khẩu"
    ),

    // Confirm password validate
    password_confirmation: yup.string(
        "Nhập mật khẩu phải là kiểu chuỗi"
    ).min(8,
        "Nhập mật khẩu phải lớn hơn 8 ký tự"
    ).max(32,
        "Nhập mật khẩu phải nhỏ hơn 32 ký tự"
    ).required(
        "Vui lòng nhập lại mật khẩu"
    ).oneOf([yup.ref("password")],
        "2 mật khẩu không trúng nhau"
    ),
});


const Register = () => {
    const { loading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    const { register, handleSubmit,reset, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),

    })
  
    const onSubmit = (data) => {

        dispatch(registerUser(data)).then((result) => {
            if (result.payload.success == true) {
                reset({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                })
            }
        });
    }


    return (
        <div className=" w-[400px] p-5 border-[1px]  rounded-md shadow-[rgba(100,100,111,0.2)0px_7px_29px_0px]">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Đăng ký </h2>
            </div>

            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className={`${errors.name ? 'text-red-700 ':''} block text-sm font-medium leading-6 text-gray-900 `}>Họ tên <span className="text-red-700">(*)</span> </label>
                        <div className="mt-2">
                            <input {...register("name")}
                                id="name"
                                name="name"
                                type="text" 
                                autoComplete="name" 
                                placeholder="Nhập họ tên..." 
                                className={` ${errors.name ? ' text-red-900 border-red-500 border-[1px] placeholder:text-red-700  bg-red-50 focus:ring-red-500' : ''} px-2 outline-none  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6`} />
                        </div>
                        <p className="mt-2 text-sm text-red-600 ">{errors.name?.message}</p>
                    </div>

                    <div>
                        <label htmlFor="email" className={`${errors.email ? 'text-red-700 ':''} block text-sm font-medium leading-6 text-gray-900 `}>Email <span className="text-red-700">(*)</span></label>
                        <div className="mt-2">
                            <input {...register("email")} 
                                id="email"
                                name="email" 
                                type="text"
                                placeholder="Nhập địa chỉ Email..."
                                className={` ${errors.email ? ' text-red-900 border-red-500 border-[1px] placeholder:text-red-700  bg-red-50 focus:ring-red-500' : ''} px-2 outline-none  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6`} />
                        </div>
                        <p className="mt-2 text-sm text-red-600 ">{errors.email?.message}</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className={`${errors.password ? 'text-red-700 ':''} block text-sm font-medium leading-6 text-gray-900 `}>Mật khẩu <span className="text-red-700">(*)</span></label>

                        </div>
                        <div className="mt-2">
                            <input {...register("password")} 
                                id="password" 
                                name="password" 
                                type="password" 
                                placeholder="********" 
                                className={` ${errors.password ? ' text-red-900 border-red-500 border-[1px] placeholder:text-red-700  bg-red-50 focus:ring-red-500' : ''} px-2 outline-none  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6`} />
                        </div>
                        <p className="mt-2 text-sm text-red-600 ">{errors.password?.message}</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password_confirmation" className={`${errors.password_confirmation ? 'text-red-700 ':''} block text-sm font-medium leading-6 text-gray-900 `}>Nhập lại mật khẩu <span className="text-red-700">(*)</span></label>

                        </div>
                        <div className="mt-2">
                            <input {...register("password_confirmation")} 
                                id="password_confirmation"
                                name="password_confirmation" 
                                type="password" 
                                placeholder="********" 
                                className={` ${errors.password_confirmation ? ' text-red-900 border-red-500 border-[1px] placeholder:text-red-700  bg-red-50 focus:ring-red-500' : ''} px-2 outline-none  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6`} />
                        </div>
                        <p className="mt-2 text-sm text-red-600 ">{errors.password_confirmation?.message}</p>
                    </div>

                   

                    <div className="">
                        <button type="submit" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">

                            {loading ? (
                                <>
                                    <div >
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Loading...
                                    </div>
                                </>
                            ) : (' Đăng ký')}

                        </button>


                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Đã có tài khoản?
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Đăng nhập</Link>
                </p>
            </div>
        </div>
    );
};

export default memo(Register);