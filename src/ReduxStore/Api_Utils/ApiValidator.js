/* eslint-disable default-case */
import { toast } from "react-toastify";

export function apiValidator(action , response , state , data , list ){
  state.error[action] = response.error_obj ? response.error_obj : null;

  if(state.error[action]){
    toast.error(action + " error");
    return
  }
  switch(action){
      case "getAll":
      case "getAllDetail":
      if(list){state[list] = response.data ? response.data : [];}else{
      state["data"] = response.data ? response.data : [];}
      break;
      // case "GetAllModulePermissionInfo":
      case "getAllPGUsers":
      case "getAllChildGroups":
      state[list] = []
      state[list] = response.data ? response.data : [];
      break;
      case "post":
      state.network_status.getAll = "";
      state.network_status.getAllDetail = "";
      state[data] = data && typeof response.data === "object" ? response.data : null;
      break;
      case "delete":
      state.network_status.getAll = "";
      state.network_status.getAllDetail = "";
      break;
      case "get":
      case "getDetail":
      state[data] = typeof response.data === "object" ? response.data : null;
      break;
      default:
      state[data] = response.data ? response.data : null
      break;
  }
  // toast.success(action + " Done")
}
