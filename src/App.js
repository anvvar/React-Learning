import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import AddItem from "./AddItem";
import Footer from "./Footer";
import AddItem from "./AddItem";
function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const[newItem,setNewItem]=useState('')

  const setAndSaveITem =(newItems)=>{
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }
  
  const addItem =(item) =>{
    const id=items.length ? items[items.length-1].id+1:1;
    const myNewItem={id,cheked:false,item};
    const listItems =[...items,myNewItem]
    setAndSaveITem(listItems);
   
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveITem(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveITem(listItems);
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem)return;
   addItem(newItem)
   setNewItem('')

  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
      newItem={ newItem }
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
