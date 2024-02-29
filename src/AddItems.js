import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItems = ({newItem,setNewItem,handelSubmit}) => {
 
  const inputRef=useRef()
  return (
   <form className='addForm'  onSubmit={handelSubmit}>
    <label htmlFor="addItem">Add Item</label>
    <input 
    autoFocus
    ref={inputRef}
    id='addItem'
    type="text" 
    placeholder='Add Item'
    required
    value={newItem}
    onChange={(e)=> setNewItem(e.target.value)}
    />
    <button
    type='submit'
    aria-label='Add item'
    onClick={()=>inputRef.current.focus()}
    >
       <FaPlus />
    </button>
   </form>
  )
}

export default AddItems