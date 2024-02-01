/* eslint-disable react/prop-types */
import { BsTrash } from "react-icons/bs"
import { FaCheck, FaEdit } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"

export const DeleteIcon = ({title="Delete" , onClick , className }) => <BsTrash  title={title} className={className} onClick={onClick}/>   
export const EditIcon = ({title="Edit" , onClick , className })  =>   <FaEdit  title={title} className={className} onClick={onClick}/>
export const ConfirmIcon = ({title="Submit" , onClick , className })  => <FaCheck  title={title} className={className} onClick={onClick}/>
export const CancleIcon = ({title="Cancle" , onClick , className})  =>  <MdOutlineClose  title={title} className={className} onClick={onClick}/>

