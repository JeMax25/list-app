import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/slices/auth-form/authSlice";


export const NavBar = () => {

    const { displayName } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onLogout = () =>{
        dispatch(logout());
    }

  return (
    <nav className='w-full h-16 bg-purple-800 flex justify-center items-center'>
        <h2 className="p-2 text-2xl text-slate-50">{displayName}</h2>
        <div className="flex-1"></div>
        <button onClick={onLogout} className="p-2 m-2 border border-red-500 rounded-lg bg-red-500 text-slate-50">Logout</button>
    </nav>
  )
}
