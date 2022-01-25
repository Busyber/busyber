import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import FieldInput from '../libs/components/fieldinput';
import Text from '../libs/components/text';
import ErrorAlert from '../libs/components/alert/error';
import SuccessAlert from '../libs/components/alert/success';
import Alert from '../libs/components/alert';
import Button from '../libs/components/button';
import Form from '../libs/components/form';
import LandingHeader from '../libs/components/landing-header';
import logopng from '../images/logo.png';
import { DeviceMobileIcon } from '@heroicons/react/solid';
import { UserIcon } from '@heroicons/react/solid';
import { ThumbUpIcon } from '@heroicons/react/solid';
import { FastForwardIcon } from '@heroicons/react/solid';
import { HomeIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';
import Features from '../libs/components/features';
import FrequentlyAsked from '../libs/components/frequently-asked';
import Footer from '../libs/components/footer';
import { useMutation, useQuery, gql } from '@apollo/client';
import useSearchParam from '../libs/hooks/useSearchParam.js';




function LandingScreen(props) {

    const history = useHistory()
    const [addBetaUserMutate, { data: addBetaUserData, error: addBetaUserError, loading: addBetaUserLoading }] = useMutation(gql`mutation($betaUser : betaUserInput){
 addBetaUser(betaUser: $betaUser)
 { 
 exists
success
}}`,{

}
 );


    const [name,setName] = useState("")
const [type,setType] = useState("")
const [phone,setPhone] = useState("")
const [email,setEmail] = useState()


const executeAddBetaUserMutate = () => {
addBetaUserMutate({ variables : {
betaUser: {
name : email,

name : type,

email : name,

email : phone,

phone : email,

phone : type,

type : email,

type : type,

}
}})
}


    return (
        <div className={" h-screen "}>
                <div   className={"flex w-full flex-col "}>
        <LandingHeader 
 sideContent={    <div  id={'form'}
 className={"flex w-full flex-col p-16 "}>
            <Form  
    onSubmit={ () => executeAddBetaUserMutate()}
 >
        <FieldInput
    className={" w-full mb-4 m-0 "}
    placeholder={"Full Name"}
onChange={(text)=> setName(text)}
required={true}
inputTailWind={' h-10'}

/>
<FieldInput
    className={" w-full mb-4 "}
    type={"email"}
placeholder={"E-mail Address"}
onChange={(text)=> setEmail(text)}
required={true}
inputTailWind={' h-10'}

/>
<FieldInput
    className={" w-full mb-4 "}
    placeholder={"Phone Number"}
onChange={(text)=> setPhone(text)}
required={true}
inputTailWind={' h-10'}

/>
    <div   className={"flex w-full pb-2 "}>
            <Text 
    className={""}
    type={"text"}

        >
        Do you want to register as a Tasker, Customer or both?
    </Text>

    </div>
    <div   className={"flex w-full pb-4 "}>
        <select 
 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
 onChange={e => setType(e.target.value)}
 >
 <option> Tasker</ option>
 <option> Both</ option>
 <option> Customer</ option>
</ select>

    </div>
<ErrorAlert 
 isShown={addBetaUserError}
 /> 
<SuccessAlert title="Thank You!"content="You have been added to the waitlist and will be notified as soon as we launch!" 
 isShown={addBetaUserData && addBetaUserData.addBetaUser.success} /> 
<Alert title="Already added!"content="You are already on the waitlist and will be notified as soon as we launch!" 
 isShown={addBetaUserData && addBetaUserData.addBetaUser.exists} 
/> 
    <Button 
    className={"w-full mt-6 "}
    typeSubmit
variant={"primary"}
size={"default"}
loading={addBetaUserLoading}

    >
        Register as a beta tester
    </Button>

    </Form>

    </div>
} 
 logo={logopng} 
 bannerPath={'#'} 
 description={'Busyber is an on-demand service application that removes inconvenience by connecting busy professionals to taskers that can help run your personal, home or professional errands.'} 
 heading1={'Hire a Tasker'} 
 heading2={'to Complete your Errands'} 
 bannerContent={'A Tasker'} 
 bannerTitle={'Become'} 
  navigation={[{ 
 name: 'Features', 
 href: `#features`},
{ 
 name: 'FAQs', 
 href: `#faqs`},
{ 
 name: 'Contact', 
 href: `mailTo:app.busyber.com`},
]} 
 />  
    <div  id={'features'}
 className={"flex w-full flex-col pt-16 "}>
        <Features 
heading={`Get more done on the go`} 
subHeading={`Book, manage tasks, message, and send photos to your Tasker faster than you can say "I'll do it later."`}
 features={[{ 
 name: 'Try the App', 
 description: `Experience the best busyber has to offer,all in one app (coming soon)`, 
 icon: DeviceMobileIcon
},{ 
 name: 'Choose Your Tasker', 
 description: `Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.`, 
 icon: UserIcon
},{ 
 name: 'Get It Done!', 
 description: `Your Tasker arrives and gets the job done. Pay securely and leave a review, all through Busyber.`, 
 icon: ThumbUpIcon
},{ 
 name: 'Help is minutes away', 
 description: `You will be able to find a Tasker within your area`, 
 icon: FastForwardIcon
},{ 
 name: 'Background checked & Vetted', 
 description: `you can be assured that all Taskers are background checked for safety`, 
 icon: HomeIcon
},{ 
 name: 'Ratings and Reviews', 
 description: `View Taskers profile ratings and reviews`, 
 icon: StarIcon
},]} 
 /> 

    </div>
    <div  id={'faqs'}
 className={"flex w-full flex-col pt-16 mt-0 "}>
        <FrequentlyAsked 
 items={[{ 
 title: 'Can I book a Tasker for same day errands?', 
 content: `Yes!, Taskers are available to help out with errands big or small today.`},
{ 
 title: 'Can I book a Tasker to run errands for someone else?', 
 content: `Sure! You can definitely ask a Tasker to help with a loved one's to-do list. Just provide all the details necessary in your booking and we'll help out whoever you'd like.`},
{ 
 title: 'Are there errands that Taskers can’t do?', 
 content: `Of course, Taskers will not run errands that are illegal or prohibited by local regulations. In addition, Taskers are allowed to decline tasks that they may not feel comfortable with or capable of at their discretion.`},
]} 
 />  

    </div>
<Footer 
 tagline={'on-demand service application'} 
 logo={logopng} 
 copyright={'2022 Busyber, All Rights Reserved'} 
 navigation={{
    product: [
       { name: 'Become a Tasker',  href: `#form`},



    ],
    company: [
       { name: 'Download Ios App',  href: `#`},
{ name: 'Download Android App',  href: `#`},
{ name: 'Contact',  href: `mailTo:app.busyber.com`},

    ],
    legal: [
       { name: 'Terms of Service',  href: `#`},
{ name: 'Privacy Policy',  href: `#`},

    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://m.facebook.com/Busyber-105445641914088/?ref=bookmarks',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/busyber.zm?utm_medium=copy_link',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
    ],
}
} 
 />  

    </div>

        </div>
    )
}

LandingScreen.propTypes = {

}

export default LandingScreen


