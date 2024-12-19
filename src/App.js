import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";



function App() {

    const [items, setItems] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        fetch('https://674b618e71933a4e885530ef.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(json => {
                setItems(json);
            });

    }, []);


    const addToCard = (obj) => {
        console.log(obj);
        setCartItems((prev) => [...prev, obj]);
        console.log(cartItems)
    }

    const onChangeSearchInput = (e)=>{
        console.log(e.target.value);
        setSearchValue(e.target.value)
    }

    return (
        <div className='wrapper clear p'>
            {cartIsOpen && <Drawer onClose={() => setCartIsOpen(false)} cartItems={cartItems} setCartItems={setCartItems}/>}
            <Header onClickCart={() => setCartIsOpen(true)}/>

            <div className="content p-40">
                <div className='d-flex align-center justify-between'>
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`:"Все кроссовки"}</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/img/search.svg" alt="search"/>
                        {searchValue && <div onClick={() => setSearchValue("")} className='clear-input'>x</div>}
                        <input onChange={onChangeSearchInput} placeholder='Поиск' value={searchValue} type="text" className='ml-15'/>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    {
                        items.filter(item => item.title.includes(searchValue)).map((obj,index) => (
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
