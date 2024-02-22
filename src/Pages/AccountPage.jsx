
import { useDispatch, useSelector } from 'react-redux';
import { ResetUserCredentials, UserInfo, setEntry } from '../ReduxStore/AuthSlice';
import { useNavigate } from 'react-router-dom';
function AccountPage() {

  const dispatch = useDispatch() 
  const navigate = useNavigate() 
  const user_ = useSelector(state => state.auth_reducer.user_)


  function Logout (){
    dispatch(ResetUserCredentials())
    navigate("/")
  }

 console.log(user_?.data.id)
  return (
    <div>
      <div><button onClick={()=>{
        dispatch(UserInfo(user_?.data?.id))
      }}>Get credentials </button></div>
      <button onClick={Logout} >Logout User</button>
    </div>
  )
}
export default AccountPage