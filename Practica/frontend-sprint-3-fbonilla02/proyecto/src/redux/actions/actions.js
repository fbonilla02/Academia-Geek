
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { dataBase, google } from "../../Firebase/firebaseConfig"
import { typesInfo, typesLogin } from "../types/types"


//=====================LOGIN===========//
export const loginAsync = ( email, password)=>{
    return (dispach)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            console.log("Usuario Autorizado");
            dispach(loginSync(email, password))
        })
        .catch((error) =>{
            console.warn(error, "Usuario no autorizado");
        })

    }
}
export const loginSync = ( email, password) =>{
    return{
        type: typesLogin.login,
        payload:{
            email, password
        }
    }
}


//==============Registrar Google ============//
export const GoogleLogin = () =>{
    return (dispach)=>{
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user})=>{
            console.log(user, "Usuario Autorizado")
            dispach(registerUserSync(user.displayName, user.email))
            
        })
        .catch((error)=>{
            console.warn(error)
        })
    }
}

//==============Registrar usuario ============//
export const registerUserAsync = (nombre, email, password) =>{
    return (dispach)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(
            async({user}) => {
                await updateProfile(auth.currentUser, {displayName: nombre})
                dispach(registerUserSync(nombre, email, password))
                console.log(user, 'Usuario Registrado')
        })
        .catch(error => console.warn(error))
    }
}

export const registerUserSync = (nombre, email, password) =>{
    return{
        type: typesLogin.register,
        payload:{
            nombre, email, password
        }
    }
}

//==================Logut=========================//

export const logoutSync = ()=>{
    return {
        type: typesLogin.logout
    }
}
export const actionLogoutAsync = ()=>{
    return (dispach) =>{
        const auth = getAuth();
        signOut(auth)
        .then(({user})=>{
            dispach(logoutSync())
            console.log('Chao');
        })
        .catch((error) => {console.warn(error, '')})
    }
}


//=================Info personal===============//
export const AddInfoSync = (formValue) =>{
    return{
        type: typesInfo.add,
        payload: formValue
    }
}
export const AddInfoAsync = (formValue)=>{
    return (dispach)=>{
        addDoc(collection(dataBase, "Ejercicio"), formValue)
        .then(resp => {
             dispach(AddInfoSync(formValue))
        })
        .catch( error => console.warn(error, 'Datos no guardados'))
    }
}

//============Listar =================//
export const listInfoASync = ()=>{
    return async (dispach)=>{
       const collectionList = await getDocs(collection(dataBase, "Ejercicio"))
       console.log(collectionList);
        dispach(listInfoSync())
    }
}
export const listInfoSync = (info)=>{
    console.log(info);
    return{
        type: typesInfo.listar,
        payload: info
    }
}