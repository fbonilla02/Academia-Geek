

const GetData = async(url = 'https://proyecto1-sprint1.herokuapp.com/products' ) =>{
    try {
        const res = await fetch(url)
       
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
export default GetData;