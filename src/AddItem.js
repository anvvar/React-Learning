import { FaPlus } from 'react-icons/fa'
const AddItem = () => {
  return (
   <form className='addForm' action="">
    <label htmlFor="">Add Item</label>

    <input 
    autoFocus
    id='addItem'
    type="text" 
    placeholder='Add Items'
    required
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