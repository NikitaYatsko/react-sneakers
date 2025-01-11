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
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const checkElement = (e) => {
            if (e.target.classList.contains('overlay')) {
                setCartIsOpen(false);
            }
        };

        if (cartIsOpen) {
            document.addEventListener('click', checkElement);
        }

        return () => {
            document.removeEventListener('click', checkElement);
        };
    }, [cartIsOpen]);

    useEffect(() => {
        async function fetchData() {

            const cartResponse = await axios.get("https://674b618e71933a4e885530ef.mockapi.io/cart")
            const favouritesResponse = await axios.get('https://6765f128410f849996568313.mockapi.io/favourites')
            const itemsResponse = await axios.get("https://674b618e71933a4e885530ef.mockapi.io/items")
            setIsLoading(false);
            setItems(itemsResponse.data)
            setCartItems(cartResponse.data)
            setFavourites(favouritesResponse.data);
        }

        fetchData()
    }, []);


    const addToCard = (obj) => {
        console.log(obj)
        if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
            axios.delete(`https://674b618e71933a4e885530ef.mockapi.io/cart/${obj.id}`);
            setCartItems(prevState => prevState.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
            axios.post("https://674b618e71933a4e885530ef.mockapi.io/cart", obj).then(r => {
                console.log(r);
            });
            setCartItems((prev) => [...prev, obj]);
        }


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
        try {
            if (favourites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://6765f128410f849996568313.mockapi.io/favourites/${obj.id}`);
                setFavourites((prevState) => prevState.filter((item) => item.id !== obj.id))
            } else {
                const {data} = await axios.post("https://6765f128410f849996568313.mockapi.io/favourites", obj);
                setFavourites((prevState) => [...prevState, data])
            }
        } catch (error) {
            alert('Не удалось добавить в фавориты');
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
                      cartItems={cartItems}
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      onChangeSearchInput={onChangeSearchInput}
                      addToFavourite={addToFavourite}
                      addToCard={addToCard}
                      isLoading={isLoading}

                />


            </Route>
            <Route path='/favourites' exact>
                <Favourites items={favourites} onAddToFavourite={addToFavourite}/>
            </Route>


        </div>
    );
}

export default App;
