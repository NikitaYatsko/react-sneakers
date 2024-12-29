import Card from "../components/Card/Card";

const Favourites = ({items, onAddToFavourite}) => {
    return (
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
                <h1>
                    Мои Закладки
                </h1>
            </div>

            <div className='d-flex flex-wrap'></div>


            <div className='d-flex flex-wrap'>
                {
                    items.map((obj, index) => (
                        <Card
                            favourites={items}
                            key={index}
                            onFavourite={onAddToFavourite}
                            favourited={true}
                            id={obj.id}
                            imageURL={obj.imageURL}
                            title={obj.title}
                        />
                    ))
                }
            </div>
        </div>
    );

}

export default Favourites;