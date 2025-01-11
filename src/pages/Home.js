import Card from "../components/Card/Card";

function Home({
                  isLoading,
                  addToCard,
                  addToFavourite,
                  onChangeSearchInput,
                  searchValue,
                  setSearchValue,
                  cartItems,
                  items
              }) {


    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        return (isLoading ? [...Array(7)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                loading={isLoading && !item} // Передаём loading, если данные ещё загружаются
                id={item?.id}
                title={item?.title}
                price={item?.price}
                imageURL={item?.imageURL}
                onFavourite={() => item && addToFavourite(item)}
                added={item ? cartItems.some(obj => Number(obj.id) === Number(item.id)) : false}
                onPlus={(obj) => item && addToCard(obj)}
            />
        ));
    };



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
                    renderItems()
                }
            </div>
        </div>
    )
}

export default Home;