
const DeleteData = async (id) => {

    try {
        let res = await fetch(`https://proyecto1-sprint1.herokuapp.com/products/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        })

       alert("Informacion eliminada")
       setTimeout(function(){
        location.reload()
    }, 1000);
       
    } catch (error) {
        alert("Hubo un error", error)
    }


}

export default DeleteData;