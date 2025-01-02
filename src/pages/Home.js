import Card from "../components/Card/Card";

function Home ({items,addToCard,addToFavourite,onChangeSearchInput,searchValue,setSearchValue}){
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
                        items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
                            <Card
                                key={index}
                                title={obj.title}
                                price={obj.price}
                                imageURL={obj.imageURL}
                                onFavourite={() => addToFavourite(obj)}
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