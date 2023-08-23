
const BaseURL = "https://basic-blog.teamrabbil.com/api"

export default async function getSinglePost(id){
    const res = await fetch(BaseURL+"/post-details/"+id)
    if(res.status === 200){
        return res.json();
    }else{
        return []
    }

}