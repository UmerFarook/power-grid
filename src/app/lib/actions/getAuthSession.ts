import { auth } from "@/auth";

const getAuthSession = async () => {
    let loggedData :{isLoggedIn:boolean,user: string | null | undefined} = { isLoggedIn:false, user:''}
    const session  = await auth();
    if(session){
        loggedData = {isLoggedIn: true,user:session?.user?.name}
    }
    return loggedData
}
export default getAuthSession;

