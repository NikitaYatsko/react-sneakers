import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";


function App() {

    const [items, setItems] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [favourites, setFavourites] = useState([]);
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

        axios.get('https://6765f128410f849996568313.mockapi.io/favourites').then(res => {
            setFavourites(res.data);
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
        axios.delete(`https://674b618e71933a4e885530ef.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }


    const addToFavourite = async (obj) => {
        if (favourites.find((favObj) => favObj.id === obj.id)) {
            axios.delete(`https://6765f128410f849996568313.mockapi.io/favourites/${obj.id}`);
            setFavourites((prevState) => prevState.filter((item) => item.id !== obj.id))
        } else {
            const {data} = await axios.post("https://6765f128410f849996568313.mockapi.io/favourites", obj);
            setFavourites((prevState) => [...prevState, data])
        }
    };

    return (
        <div className='wrapper clear p'>
            {cartIsOpen &&
                <Drawer onClose={() => setCartIsOpen(false)} cartItems={cartItems} setCartItems={setCartItems}
                        onRemove={removeFromCard}/>
            }
            <Header onClickCart={() => setCartIsOpen(true)}/>

            <Route path='/' exact>
                <Home items={items}
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      onChangeSearchInput={onChangeSearchInput}
                      addToFavourite={addToFavourite}
                      addToCard={addToCard}
                />


            </Route>
            <Route path='/favourites' exact>
                <Favourites items={favourites} onAddToFavourite={addToFavourite}/>
            </Route>


        </div>
    );
}

export default App;
