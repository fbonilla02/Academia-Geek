export const getDataById = async (id) =>{

    try {
        const URL = 'https://ecommerce-fbonilla.herokuapp.com/products'
        let res = await fetch (`${URL}/${id}`)
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }

}