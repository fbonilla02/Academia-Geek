export const getData = async (resource) =>{
   try {
    const URL = 'https://ecommerce-fbonilla.herokuapp.com/'
    let res = await fetch (`${URL}${resource}`)
    let data = await res.json();
    return data;
   } catch (error) {
       console.log(error);
   }
}


// const URL = 'http://localhost:4000/products'

// const getShop = async () =>{
//     try{
//         const resp = await fetch(URL)
//         const data = await resp.json()
//         return data;
//     }catch(error){
//         console.log("fetch error", error);
//     }
// }

// export default getShop;
