import Card from "../components/Card/Card";

function Home({items, addToCard, addToFavourite, onChangeSearchInput, searchValue, setSearchValue, cartItems}) {
    return (
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
                    items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageURL={item.imageURL}
                            onFavourite={() => addToFavourite(item)}
                            added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                            onPlus={(obj) => {
                                addToCard(obj)
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;