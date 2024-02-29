import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem,setNewItem,handelSubmit}) => {
  return (
   <form className='addForm'  onSubmit={handelSubmit}>
    <label htmlFor="addItem">Add Item</label>

    <input 
    autoFocus
    id='assItem'
    type="text" 
    placeholder='Add Item'
    required
    value={newItem}
    onChange={(e)=> setNewItem(e.target.value)}
    />
    <button
    type='submit'
    aria-label='Add item'
    >
       <FaPlus />
    </button>
   </form>
  )
}

export default AddItem