const Drawer = ({onClose, onRemove, cartItems = []}) => {

    const calculateTotalPrice = () => {
        return cartItems.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

    }

    const tax = (calculateTotalPrice() / 100) * 5;


    return (
        <div className='overlay'>


            <div className="drawer">

                <h2 className="d-flex align-center justify-between ">
                    Корзина
                    <img src="/img/cart-button.svg" alt="remove" className='cart-remove_btn cu-p' onClick={onClose}/>
                </h2>

                <div className='cart-empty'>
                    <h3 className="text-center">Ваша корзина сейчас пуста :(</h3>
                    <button className='order-button'>Вернуться назад</button>
                </div>


                <div className="items">
                    {cartItems.map((obj, index) => (
                        <div className="cart-item d-flex align-center" key={index}>
                            <div className='cart-item-img'>
                                <img src={obj.imageURL} alt="" className='cart-item-img'/>
                            </div>
                            <div className='ml-10'>
                                <p>
                                    {obj.title}
                                </p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id, calculateTotalPrice())} src="/img/cart-button.svg"
                                 alt="remove" className='cart-remove_btn'
                            />
                        </div>
                    ))}


                </div>
                <div className='cart-total_block'>
                    <ul>
                        <li>
                            <span>
                                Итого
                            </span>
                            <div>

                            </div>
                            <b>
                                {calculateTotalPrice()} руб.
                            </b>
                        </li>
                        <li>
                            <span>
                                Налог 5%
                            </span>
                            <div>

                            </div>
                            <b>
                                {tax.toFixed(1)} руб.
                            </b>
                        </li>
                    </ul>
                    <button className='order-button'>Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                </div>


            </div>
        </div>
    )
}
export default Drawer;