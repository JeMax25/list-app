import { useDispatch, useSelector } from "react-redux"
import './style.css'
import { deleteObject, sortArray } from "../store/slices/list/listSlice";
import { useEffect } from "react";

export const ListComponent = () => {


  const listObjects = useSelector(state => state.list);
  const dispatch = useDispatch();


  const onDelete = (id) => {
    dispatch(deleteObject(id));
  }

  useEffect(() => {
    dispatch(sortArray());
    localStorage.setItem('list', JSON.stringify(listObjects));
  }, [listObjects]);


  return (
    <div className='w-1/2 flex flex-col items-center'>
        <h2 className="text-center p-8 text-3xl font-bold"> Lista De Objetos</h2>
        <ul className="mi-lista w-4/5 flex flex-col justify-center items-center ">
          {
            listObjects.map((object,index) => (
              <li key={object.uuid} className={`w-full h-9 pl-3 border-black text-white flex justify-between items-center ${index % 2 === 0 ? 'bg-purple-600 border' : 'bg-purple-800'}`}>{index + 1}. {object.name} <span onClick={() => onDelete(object.uuid)}><i className="pr-4 cursor-pointer fa-solid fa-trash" style={{color: "#ea7575",}} /> </span>  </li>
            ))
          }
        </ul>
    </div>

    

  )
}
