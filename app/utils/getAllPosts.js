
const BaseURL = "https://basic-blog.teamrabbil.com/api"

export default async function getAllPosts(){
    const res = await fetch(BaseURL+"/post-newest")
    if(res.status === 200){
        return res.json();
    }else{
        return []
    }

}


// export async function postLatest(){
//     let res = await axios.get(BaseURL+"/post-newest")
//     if(res.status === 200){
//         return res.data;
//     }else{
//         return []
//     }
// }