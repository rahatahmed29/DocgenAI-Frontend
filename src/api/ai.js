import axios from "axios";
export default async function annotateCode(code,style="jsdoc"){
   
        const res=await axios.post('https://docgenai-3r7d.onrender.com/api/ai/doc',{
            code:code,
            style:style
        })
const annotate=res.data.code

return annotate;
    
}