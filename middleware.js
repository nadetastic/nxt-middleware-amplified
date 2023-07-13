import { NextResponse } from 'next/server'
import { Amplify, Auth } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure({...awsExports, ssr: true});
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    await currentUser();

    console.log('middleware')
    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/page2',
}


const currentUser = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        // return user;
        console.log(user)
    
    } catch (err) {
        console.log(err);
        // return 'no user'
    }
}