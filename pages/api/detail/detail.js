import db from "../../../lib/db"

export default async function handler(req,res){

if(req.method ==='GET'){
    
    return res.status(200).json({message:"here is requiest"})
}
}