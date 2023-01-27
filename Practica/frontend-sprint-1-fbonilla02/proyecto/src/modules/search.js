function search(texto, data){
    const result = data.filter((value)=> ( value.name.toLowerCase().includes(texto.toLowerCase()) 
        || value.location.toLowerCase().includes(texto.toLowerCase()))
        )
    return result;
}

export default search;