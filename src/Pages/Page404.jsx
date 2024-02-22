import { BackForm } from "../Utils/Components/BackLayout"
import { useSelector } from 'react-redux';
import { LoadingIcon } from "../Utils/Components/LoadingIcon";

function Page404() {
  const network_status = useSelector(state => state.auth_reducer.network_status)
  if(network_status.refresh === "pending") return <LoadingIcon/>
  return (
    <BackForm>
    <div className="flex-1 grid" >
      <img className="m-auto" src="404.jpg" alt="" />
    </div>
    </BackForm>
  )
}

export default Page404