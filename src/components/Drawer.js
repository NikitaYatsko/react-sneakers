const Drawer = () => {
    return (
        <div className='overlay'>
            <div className="drawer">
                <h2 className="d-flex align-center justify-between ">
                    Корзина
                    <img src="/img/cart-button.svg" alt="remove" className='cart-remove_btn cu-p'/>
                </h2>

                <div className="items">
                    <div className="cart-item d-flex align-center">
                        <img width={70} height={70} src="/img/image%201.jpeg" alt="sneakers" className='mb-15'/>
                        <div className='ml-10'>
                            <p>
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/img/cart-button.svg" alt="remove" className='cart-remove_btn'/>
                    </div>


                    <div className="cart-item d-flex align-center">
                        <img width={70} height={70} src="/img/image%201.jpeg" alt="sneakers" className='mb-15'/>
                        <div className='ml-10'>
                            <p>
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/img/cart-button.svg" alt="remove" className='cart-remove_btn'/>
                    </div>
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
                                21 498 руб.
                            </b>
                        </li>
                        <li>
                            <span>
                                Налог 5%
                            </span>
                            <div>

                            </div>
                            <b>
                                1 074 руб.
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