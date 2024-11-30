import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const arr = [
        {
            title: 'Мужские Кроссовки Nike Blazer Mid Seude',
            price: 12999,
            imageURL : '/img/image 1.jpeg'
        },
        {
            title: 'Мужские Кроссовки Nike Air Max 270',
            price: 15600,
            imageURL : '/img/image 2.jpeg'

        },
        {
            title: 'Мужские Кроссовки Nike Blazer Mid Seude',
            price: 8499,
            imageURL : '/img/image 3.jpeg'

        },
        {
            title: 'Кроссовки Puma X Aka Boku Future Rider',
            price: 8999,
            imageURL : '/img/image 4.jpeg'

        },

    ]
    return (
        <div className='wrapper clear p'>
            <Drawer/>
            <Header/>

            <div className="content p-40">
                <div className='d-flex align-center justify-between'>
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder='Поиск' type="text" className='ml-15'/>
                    </div>
                </div>
                <div className='d-flex mt-40'>
                    {
                        arr.map((obj) => (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imageURL={obj.imageURL}
                                onFavourite={()=> console.log("Добавили в закладки")}
                                onPlus={()=>console.log("Нажали на плюс")}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
