import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth as authConfig } from "../../../lib/firebase-config";

customInitApp();

async function handleBearerToken(authorization){
    if(authorization?.startWith("Bearer")){
        const idToken = authorization.split("Bearer ")[1];
        const decodedToken = await auth().verifyIdToken(idToken);

        if(decodedToken){
            const expiresIn = 5 * 60 * 1000;
            const sessionCookie = await auth().verifyIdToken(idToken, {expiresIn});
        }
        const options ={
            name : "session",
            value: sessionCookie,
            maxAge: expiresIn,
            httpOnly: true,
            secury: true,
        };
        cookies().set(options);

        return NextResponse.json({status:"200"});
    }


};

async function handleEmailAndPassword(email, password){
    try{
        const userCredential = await signInWithEmailAndPassword(
            authConfig,
            email,
            password            
        );
        const user = userCredential.user;
        const idToken = await user.accessToken;

        if(authorization){
            const idToken = authorization;
            const decodedToken = await auth().verifyIdToken(idToken);
            if(decodedToken){
                const expiresIn = 5 * 60 * 1000;
                const sessionCookie = await auth().createSessionCookie(idToken,{
                    expiresIn,
                });
                const options ={
                    name: "session",
                    value: sessionCookie,
                    maxAge: expiresIn,
                    httpOnly: true,
                    secure: true,
                };
                cookies().set(options);
                return NextResponse.json({options}, {status: 200});
            };
        };
        
        
        
    }catch(error){
        console.error("Authentication error:", error);
        let errorMessage = "Authentication failed.";
        if(error.code === "auth/wrong-password"){
            errorMessage = "wrong-password";

        }else if(error.code === "auth/user-not-found"){
            errorMessage = "user-not-found";
        }else if(error.code === "auth/invalid-email"){
            errorMessage = "invalid-email";
        }
        return NextResponse.json({error: errorMessage}, {status: 401});
    }
}

export async function POST(request, response){
    try{
        const {email, password} = await request.json();
        if(!email || !password){
            
            const authorization = headers().get("authorization");
            return await handleBearerToken(authorization);
        }else{
            return await handleEmailAndPassword(email, password);
        }
    }catch(error){
        // console.error("Error during login:", error);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }

}

export async function GET(request) {
    const session = cookies().get("session")?.value || "";
  
    //Validate if the cookie exist in the request
    if (!session) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true);
  
    if (!decodedClaims) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    return NextResponse.json({ isLogged: true }, { status: 200 });
  }