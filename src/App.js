import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";


function App() {

    const [items, setItems] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        axios.get("https://674b618e71933a4e885530ef.mockapi.io/items").then(res => {
            console.log(res.data);
            setItems(res.data)
        })

        axios.get("https://674b618e71933a4e885530ef.mockapi.io/cart").then(res => {
            console.log(res.data);
            setCartItems(res.data)
        })
    }, []);


    const addToCard = (obj) => {
        console.log(obj);
        setCartItems((prev) => [...prev, obj]);
        console.log(cartItems)
        axios.post("https://674b618e71933a4e885530ef.mockapi.io/cart", obj).then(r => {
            console.log(r);
        })

    }

    const onChangeSearchInput = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value)
    }
    const removeFromCard = (id) => {
        /*axios.delete(`https://674b618e71933a4e885530ef.mockapi.io/cart/${id}`).then(r => {

        })*/
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    return (
        <div className='wrapper clear p'>
            {cartIsOpen &&
                <Drawer onClose={() => setCartIsOpen(false)} cartItems={cartItems} setCartItems={setCartItems}
                        onRemove={removeFromCard}/>}
            <Header onClickCart={() => setCartIsOpen(true)}/>

            <div className="content p-40">
                <div className='d-flex align-center justify-between'>
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/img/search.svg" alt="search"/>
                        {searchValue && <div onClick={() => setSearchValue("")} className='clear-input'>x</div>}
                        <input onChange={onChangeSearchInput} placeholder='Поиск' value={searchValue} type="text"
                               className='ml-15'/>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    {
                        items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
                            <Card
                                key={index}
                                title={obj.title}
                                price={obj.price}
                                imageURL={obj.imageURL}
                                onFavourite={() => console.log("Добавили в закладки")}
                                onPlus={(obj) => {
                                    addToCard(obj)
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
