import { useDispatch } from "react-redux"
import { useForm } from "../hooks/useForm"
import { addObject, sortArray } from "../store/slices/list/listSlice";


export const Form = () => {

  const dispatch = useDispatch();

  const { object,onInputChange,onResetForm } = useForm({
    object: ''
  })

  const onSubmitForm = (event) => {
    event.preventDefault();

    if(object.length === 0 || !isNaN(object))return;

    dispatch(addObject(object));

    onResetForm();
  }

  return (
    <div className='flex flex-col w-1/2'>
      <h2 className="text-center p-8 mr-12 text-3xl font-bold">Agregar Objeto</h2>
      <form onSubmit={onSubmitForm} className='w-full flex flex-col justify-center'>
        <input 
        onChange={onInputChange}
        name="object"
        value={object}
        type="text" 
        placeholder='Agrega tu objeto' 
        className='w-4/5 h-10 pl-2 border border-black rounded-md'/>
        <div className='w-4/5 pt-4 flex justify-between text-xl'>
          <button type="submit" className='p-3 rounded-xl bg-green-500'>Agregar</button>

        </div>
      </form>
    </div>
    
  )
}
