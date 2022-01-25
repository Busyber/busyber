import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import useAuth from 'libs/auth-react/hooks/useAuth';
import Button from '../libs/components/button';
import FieldInput from '../libs/components/fieldinput';
import ErrorAlert from '../libs/components/alert/error';
import SuccessAlert from '../libs/components/alert/success';
import Alert from '../libs/components/alert';
import Stat from '../libs/components/stat';
import { UsersIcon } from '@heroicons/react/solid';
import { UserIcon } from '@heroicons/react/solid';
import { UserGroupIcon } from '@heroicons/react/solid';
import Text from '../libs/components/text';
import ContentController from '../libs/components/content-controller';
import Dialog from '../libs/components/dialog';
import { useMutation, useQuery, gql } from '@apollo/client';
import useSearchParam from '../libs/hooks/useSearchParam.js';




function DashboardScreen(props) {

    const history = useHistory()
    const { data: betaUsersData, error: betaUsersError, loading: betaUsersLoading } = useQuery(gql`query {
 betaUsers{ 
 name
email
phone
type
_id
}}`
 );
const [deleteBetaUserMutate, { data: deleteBetaUserData, error: deleteBetaUserError, loading: deleteBetaUserLoading }] = useMutation(gql`mutation($betaUser : betaUserInput){
 deleteBetaUser(betaUser: $betaUser)
 { 
 _id
name
email
phone
type
}}`,{

 onComplete: ()=>{
setShowConfirmDelete(false)

},
 update: (cache, { data }) => {
const betaUsersGQL = gql`query {
 betaUsers{ 
 _id
name
email
phone
type
}}`; 
const betaUsersQuery = cache.readQuery({ 
 query:betaUsersGQL 
})
const newbetaUsers = betaUsersQuery.filter(item => {
 if(item._id == data.deleteBetaUser._id){ 
  return false; 
   }else{ 
 return true; 
 } 
})
 cache.writeQuery({
 query:betaUsersGQL,
 data: {
 betaUsers: newbetaUsers
}
 })
} 
,
 refetchQueries: [{ 
 query:gql`query {
 overview{ 
 _id
totalBetaUsers
taskers
customers
both
}}` 
},
]
}
 );
const { data: overviewData, error: overviewError, loading: overviewLoading } = useQuery(gql`query {
 overview{ 
 _id
totalBetaUsers
taskers
customers
both
}}`
 );
const [addBetaUserMutate, { data: addBetaUserData, error: addBetaUserError, loading: addBetaUserLoading }] = useMutation(gql`mutation($betaUser : betaUserInput){
 addBetaUser(betaUser: $betaUser)
 { 
 _id
exists
success
}}`,{

 update: (cache, { data }) => {
const betaUsersGQL = gql`query {
 betaUsers{ 
 _id
name
email
phone
type
}}`; 
const betaUsersQuery = cache.readQuery({ 
 query:betaUsersGQL 
})
 cache.writeQuery({
 query:betaUsersGQL,
 data: {
 betaUsers: [data.addBetaUser, ...betaUsersQuery.betaUsers]
}
 })} 
,
 refetchQueries: [{ 
 query:gql`query {
 overview{ 
 _id
totalBetaUsers
taskers
customers
both
}}` 
},
]
}
 );


    const [showConfirmDelete,setShowConfirmDelete] = useState()
const [phone,setPhone] = useState("")
const [name,setName] = useState("")
const [type,setType] = useState("")
const [email,setEmail] = useState("")


const executeDeleteBetaUserMutate = () => {
deleteBetaUserMutate({ variables : {
betaUser: {
_id : showConfirmDelete,

email : showConfirmDelete,

}
}})
}
const executeAddBetaUserMutate = () => {
addBetaUserMutate({ variables : {
betaUser: {
name : name,

email : email,

phone : phone,

type : type,

}
}})
}

const auth = useAuth()


    return (
        <div className={" h-screen "}>
            <ContentController
    error={ betaUsersError}
loading={ betaUsersLoading}
data={ betaUsersData}
 >
    {betaUsersData &&
        <>
                <div   className={"flex w-full flex-col p-8 bg-gray-50 "}>
            <div   className={"flex w-full justify-end flex-row pb-8 "}>
            <Button 
    className={""}
    variant={"text"}
size={"small"}
onClick={()=>auth.logout()}

    >
        Logout
    </Button>

    </div>
    <div   className={"flex w-full flex-col "}>
            <div   className={"flex w-full md:justify-evenly md:flex-row flex-col "}>
        <FieldInput
    className={" w-full "}
    label={"Full Name"}
placeholder={"Full Name"}
onChange={(text)=> setName(text)}
inputTailWind={' '}

/>
<FieldInput
    className={" w-full "}
    label={"Email"}
type={"email"}
placeholder={"Email"}
onChange={(text)=> setEmail(text)}
inputTailWind={' '}

/>
<FieldInput
    className={" w-full "}
    label={"Phone"}
placeholder={"Phone"}
onChange={(text)=> setPhone(text)}
inputTailWind={' '}

/>

    </div>
    <div   className={"flex w-full md:align-center md:justify-evenly md:flex-row md:pt-6 flex-col "}>
            <div   className={"flex w-full md:pr-16 flex-col "}>
        <label className="block text-sm font-medium text-gray-700">Type</label>
<select 
 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
 onChange={e => setType(e.target.value)}
 >
 <option> Customer</ option>
 <option> Tasker</ option>
 <option> Both</ option>
</ select>

    </div>
    <div   className={"flex w-full md:align-end md:pt-0 flex-col pt-6 "}>
            <Button 
    className={"w-full mt-0 "}
    variant={"primary"}
size={"small"}
onClick={()=>executeAddBetaUserMutate()}
loading={addBetaUserLoading}

    >
        Add Beta User
    </Button>

    </div>

    </div>
    <div   className={"flex w-full "}>
        <ErrorAlert 
 isShown={addBetaUserError}
 /> 
<SuccessAlert content="Added Beta User" 
 isShown={addBetaUserData && addBetaUserData.addBetaUser.success} /> 
<Alert content="beta User Already Exists." 
 isShown={addBetaUserData && addBetaUserData.addBetaUser.exists} 
/> 

    </div>

    </div>
    <div   className={"flex w-full md:justify-evenly md:flex-row flex-col pb-16 pt-16 "}>
            <div   className={"flex w-full justify-evenly flex-row "}>
        <Stat
icon={<UsersIcon/>}
value={overviewData && overviewData.overview.totalBetaUsers}
title={'Beta Users'}
bg={'bg-green-600'}
helpText={'the total number of beta users registered'}

/>
<Stat
icon={<UserIcon/>}
value={overviewData && overviewData.overview.taskers}
title={'Taskers'}
bg={'bg-emerald-600'}
helpText={'total number of beta users registered as taskers'}

/>

    </div>
    <div   className={"flex w-full justify-evenly flex-row "}>
        <Stat
icon={<UserIcon/>}
value={overviewData && overviewData.overview.customers}
title={'Customers'}
bg={'bg-blue-600'}
helpText={'total number of beta users registered as customers'}

/>
<Stat
icon={<UserGroupIcon/>}
value={overviewData && overviewData.overview.both}
title={'Both'}
bg={'bg-fuchsia-600'}
helpText={'Total number of beta users registered as both customers and taskers'}

/>

    </div>

    </div>
    <div   className={"flex w-full flex-col border border-gray-200 bg-white shadow-md rounded-lg "}>
            <div   className={"flex w-full p-4 border-b border-gray-200 "}>
            <Text 
    className={""}
    type={"heading-small"}

        >
        Registered Beta Users
    </Text>

    </div>
<div>
{betaUsersData.betaUsers.map((item, index) => (
    <div   className={"flex w-full flex-row pb-2 pt-2 p-4 border-t border-gray-100 "}>
            <div   className={"flex w-full flex-col "}>
            <div   className={"flex w-full justify-between flex-row "}>
            <Text 
    className={"font-medium "}
    type={"text"}

        >
        {item.name}
    </Text>
    <Text 
    className={""}
    type={"text"}

        >
        {item.email}
    </Text>

    </div>
    <div   className={"flex w-full justify-between flex-row mt-1 "}>
            <Text 
    className={""}
    type={"text-small"}

        >
        {item.type}
    </Text>
    <Text 
    className={"text-gray-300 "}
    type={"text-small"}

        >
        {item.phone}
    </Text>

    </div>

    </div>

    </div>

))}
 </div>

    </div>

    </div>

        </>
    }
</ContentController>
    <Dialog  
    onCloseComplete={()=> setShowConfirmDelete(false)}
isShown={showConfirmDelete}
 >
            <Text 
    className={""}
    type={"text"}

        >
        Are you sure you want to Delete this beta user
    </Text>
    <div   className={"flex w-full justify-end flex-row p-16 "}>
            <Button 
    className={""}
    onClick={()=> setShowConfirmDelete(false)}
variant={"secondary"}
size={"small"}

    >
        Cancel
    </Button>
    <Button 
    className={""}
    variant={"secondary"}
size={"small"}
onClick={()=>executeDeleteBetaUserMutate()}
loading={deleteBetaUserLoading}

    >
        Confirm
    </Button>

    </div>

    </Dialog>

        </div>
    )
}

DashboardScreen.propTypes = {

}

export default DashboardScreen


