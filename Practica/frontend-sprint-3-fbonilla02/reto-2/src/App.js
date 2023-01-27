
import { useDispatch } from 'react-redux';
import './styles/App.css'
import Filtro from './Filtro';
import { useForm } from './hooks/useForm';
import Lista from './Lista';
import { actionAddSync } from './Redux/actions/actionProducto';
import { BsSun } from "react-icons/bs";

function App() {
  const [formValue, handleInputChange, rest] = useForm({
    id: +new Date(),
    valor: '',
    complete: false
  })
  const dispacth = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispacth(actionAddSync(formValue))
    rest()

  }
  const changeTheme = ()=>{
    localStorage.setItem('theme', 'cambio')
    console.log('si');
  }
  const themexd = localStorage.getItem('theme')
  return (
    <div className={themexd !== 'cambio' ? 'App' : 'App2'}  >
        <div className='Contenido' >
        <section className='val'>
        <div className='divXD'><h1 className='title'>TODO</h1> <span className='iconColor' onClick={changeTheme}> <BsSun/> </span> </div>
          <form className='form' onSubmit={handleSubmit}>
            <input type='text' name='valor' className='input' placeholder='Crerate a new todo..' onChange={handleInputChange}/>
            <button type="submit" className='btnSend'>Add</button>
          </form>

          <Lista/>
        </section>
        <Filtro />

        <p>Drag and drop to reorder list</p>
        </div>
      </div>

  );
}

export default App;
