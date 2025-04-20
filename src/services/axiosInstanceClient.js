 import axios   from "axios";
 import Swal from "sweetalert2";
const axiosInstanceClient = axios.create({
    baseURL : 'http://localhost:8000/api',
    timeout : 10000,
    headers : {
        'Content-Type' : 'application/json'
    }
})
 axiosInstanceClient.interceptors.request.use(
     (req)=>{
         if (localStorage.getItem('token_client')) {
             req.headers.Authorization = `Bearer ${localStorage.getItem('token_client')}`
             console.log(req.headers);
         }
         return req;
     }
 )

    axiosInstanceClient.interceptors.response.use(
        (response) =>response.data,

        (error)=>{
            console.log(error)
            if(error.code == "ERR_NETWORK"){
                Swal.fire('network error')
                return;
            }else if (error.response.status == 404){
                Swal.fire('Api not found')
                return;
            }
            else if(error.response.status == 500){
                Swal.fire('Server.error')
                return;
            }else if(error.response.data ){
                return  Promise.reject(  Swal.fire({
                    title : error.response.data.message,
                    icon : 'warning',
                    toast : true,
                    showConfirmButton : false,
                    position : 'bottom-end',
                    timer : 3000
                })

                )
            }



        })
 export default axiosInstanceClient;


