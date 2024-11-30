import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";

function App() {

    const [items, setItems] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);


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

    return (
        <div className='wrapper clear p'>
            {cartIsOpen && <Drawer onClose={() => setCartIsOpen(false)} cartItems={cartItems}/>}
            <Header onClickCart={() => setCartIsOpen(true)}/>

            <div className="content p-40">
                <div className='d-flex align-center justify-between'>
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder='Поиск' type="text" className='ml-15'/>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    {
                        items.map((obj) => (
                            <Card
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
