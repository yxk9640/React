import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ], 
    async session({session}){

    } ,
    async signIn({profile}){
        try{
            //serverless -> lambda -> dynamodb
        }
        catch(error){
            console.log(error)
            return false
        }
    }
})

// export exception for OAuth defined in GoogleProvider
export { handler as GET, handler as POST}