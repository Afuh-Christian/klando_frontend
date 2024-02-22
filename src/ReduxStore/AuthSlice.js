import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_Request_Response } from "./Api_Utils/Api_Request_Response";
import { initialStateDefault } from "./Api_Utils/IntitialState";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const RegisterUser = createAsyncThunk("AuthUser/RegisterUser" , async (ObjData)=>{
        delete ObjData.repeatPassword
const response = await api_Request_Response("post" , "api/Auth/register", ObjData )
    return JSON.stringify(response)
})

export const LoginUser = createAsyncThunk("AuthUser/login" , async (ObjData)=>{
    return JSON.stringify(await api_Request_Response("post" , "api/Auth/login", ObjData,
     ))
})


export const googleLogin = createAsyncThunk("AuthUser/googleLogin" , async (ObjData)=>{
    return JSON.stringify(await api_Request_Response("post" , "api/Auth/GoogleAuth",  ObjData ))
})
export const facebookLogin = createAsyncThunk("AuthUser/facebookLogin" , async (ObjData)=>{
    return JSON.stringify(await api_Request_Response("post" , "api/Auth/FacebookAuth",  ObjData ))
})





export const RefreshUser = createAsyncThunk("AuthUser/RefreshUser" , async (ObjData)=>{

    const response = await api_Request_Response("post", "api/Auth/Refresh" , ObjData)
    console.log(response.data)


    return JSON.stringify(response)
})


export const UserInfo = createAsyncThunk("AuthUser/UserInfo" , async (id)=>{
    const [userdata 
    ] = await Promise.all([
        await api_Request_Response("get" , "api/auth/userinfo" , null , {id}),
    ])
    if(userdata.error_obj) return JSON.stringify(userdata)
    const roledata = await api_Request_Response("post" , "api/auth/GetUserRole" , userdata.data)
    if(roledata.error_obj) return JSON.stringify(roledata)
    userdata.data = {...userdata.data , roles: roledata.data }
    return JSON.stringify(userdata)
})

const defaultUserCredentials = {
    data: null , 
    accessToken : null ,
    refreshToken : null ,
}

const initialState = {
    ...initialStateDefault,
    permissionGroupUsers: [] ,
    entry:false , 
    user_: defaultUserCredentials,
   
};
const AuthUser_Slice = createSlice({
    name :"AuthUser",
    initialState,
    reducers: {
        setEntry : (state , action ) => {
            state.entry = action.payload },

        ResetUserCredentials : (state , action ) => {
         state.user_ = defaultUserCredentials
         state.entry = false
         Cookies.set("clientKlandoRefreshToken")
        },
        AuthUserError_networkStatus : (state, action) => {
          state.network_status.get = ""
          state.error.get = null
      },
    },

    extraReducers(builder){
        builder

        .addCase(RegisterUser.rejected , (state, action) => {
            state.network_status.post = "rejected";
        })
        .addCase(RegisterUser.pending , (state, action) => {
            state.network_status.post = "pending";
        })
        .addCase(RegisterUser.fulfilled , (state, action) => {
            LoginUserUtil(JSON.parse(action.payload) , state )
            state.network_status.post = "fulfilled";
        })


        .addCase(LoginUser.rejected , (state, action) => {
            state.network_status.post = "rejected";
        })
        .addCase(LoginUser.pending , (state, action) => {
            state.network_status.post = "pending";
        })
        .addCase(LoginUser.fulfilled , (state, action) => {
            console.log(JSON.parse(action.payload)?.data)
            LoginUserUtil(JSON.parse(action.payload) , state )
            state.network_status.post = "fulfilled";
        })


        .addCase(googleLogin.rejected , (state, action) => {
            state.network_status.post = "rejected";
        })
        .addCase(googleLogin.pending , (state, action) => {
            state.network_status.post = "pending";
        })
        .addCase(googleLogin.fulfilled , (state, action) => {
            // state.entry = true
            LoginUserUtil(JSON.parse(action.payload) , state )
            state.network_status.post = "fulfilled";
        })



        .addCase(facebookLogin.rejected , (state, action) => {
            state.network_status.post = "rejected";
        })
        .addCase(facebookLogin.pending , (state, action) => {
            state.network_status.post = "pending";
        })
        .addCase(facebookLogin.fulfilled , (state, action) => {
            // state.entry = true
            LoginUserUtil(JSON.parse(action.payload) , state )
            state.network_status.post = "fulfilled";
        })
        .addCase(RefreshUser.rejected , (state, action) => {
            state.network_status.refresh = "rejected";
        })
        .addCase(RefreshUser.pending , (state, action) => {
            state.network_status.refresh = "pending";
        })
        .addCase(RefreshUser.fulfilled , (state, action) => {
            LoginUserUtil(JSON.parse(action.payload) , state )
            state.network_status.refresh = "fulfilled";
        })
        .addCase(UserInfo.rejected , (state, action) => {
            state.network_status.userinfo = "rejected";
        })
        .addCase(UserInfo.pending , (state, action) => {
            state.network_status.userinfo = "pending";
        })
        .addCase(UserInfo.fulfilled , (state, action) => {
            const response = (JSON.parse(action.payload))
            state.error = response.error_obj ? response.error_obj : null;
            if(response.error_obj === null){
                state.user_.data = response.data
                console.log(state.user_.data)
            }
          
            state.network_status.userinfo = "fulfilled";
        })
    }
})

function LoginUserUtil(response , state , user = "user_"){
    state.error = response.error_obj ? response.error_obj : null;
    response.error_obj && console.log( response.error_obj)
    if([null , undefined].includes(response.error_obj)){
       
        // state.entry = true;
        state[user].data = response?.data?.accessToken ? jwtDecode(response?.data?.accessToken) : null;
        state[user].accessToken = response?.data?.accessToken?? null;
        state[user].refreshToken = response?.data?.refreshToken?? null;
       if(state[user].data){
        Cookies.set("clientKlandoRefreshToken" , response?.data?.refreshToken );
        state[user].data.id = response?.data?.accessToken ? (jwtDecode(response?.data?.accessToken)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]) : null ;
        state[user].data.email =response?.data?.accessToken ?  (jwtDecode(response?.data?.accessToken)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]) : null ;
        state[user].data.name =response?.data?.accessToken ? (jwtDecode(response?.data?.accessToken)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"])   : null ;
        
        
        console.log(Cookies.get("clientKlandoRefreshToken"));
        console.log(response?.data?.refreshToken)
        Cookies.get("clientKlandoRefreshToken") === response?.data?.refreshToken ? console.log(true) : console.log(false)
        console.log("User logged in .")
    }
       }
}

export const {setEntry, ResetUserCredentials , AuthUserError_networkStatus } = AuthUser_Slice.actions
const AuthUserReducer = AuthUser_Slice.reducer

export default AuthUserReducer



