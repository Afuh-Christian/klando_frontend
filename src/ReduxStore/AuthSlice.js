import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_Request_Response } from "./Api_Utils/Api_Request_Response";
import { apiValidator } from "./Api_Utils/ApiValidator";
import { initialStateDefault } from "./Api_Utils/IntitialState";
import { Password } from "@mui/icons-material";



export const RegisterUser = createAsyncThunk("AuthUser/RegisterUser" , async (ObjData)=>{

    /** 
     * 
     *    userName : "" , 
        email : "" , 
        phoneNumber : "" , 
        password : "" , 
        repeatPassword : "" , 
     */

        delete ObjData.userName
        delete ObjData.phoneNumber
        delete ObjData.repeatPassword

    return JSON.stringify(await api_Request_Response("post" , "register", ObjData ))
})

export const LoginUser = createAsyncThunk("AuthUser/LoginUser" , async (ObjData)=>{
    return JSON.stringify(await api_Request_Response("post" , "login", { ...ObjData,
        twoFactorCode: "string",
        twoFactorRecoveryCode: "string"

           // email: "afuhchris@gmail.com",
           // password: "deLe1017@",
           // twoFactorCode: "string",
           // twoFactorRecoveryCode: "string"
          
    }, {useCookies: true} ))
})


const initialState = {
    ...initialStateDefault,
    permissionGroupUsers: [] ,
    AuthUser_: null,
    AuthUser_to_edit_id:"",
};
const AuthUser_Slice = createSlice({
    name :"AuthUser",
    initialState,
    reducers:{
        setAuthUser_to_edit : (state , action ) => {
            state.AuthUser_to_edit_id = action.payload },

        Reset_AuthUser_to_edit : (state , action ) => {
            state.AuthUser_ = null;
            state.AuthUser_to_edit_id = null;
            state.network_status.get = "";
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
            apiValidator("post" , JSON.parse(action.payload) , state );
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
           // apiValidator("post" , JSON.parse(action.payload) , state );
            state.network_status.post = "fulfilled";
        })

    }
})


export const {setAuthUser_to_edit, Reset_AuthUser_to_edit , AuthUserError_networkStatus } = AuthUser_Slice.actions
const AuthUserReducer = AuthUser_Slice.reducer

export default AuthUserReducer



