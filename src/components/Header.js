const Header = ()=>{
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div className='header-info ml-15'>
                    <h3 className='text-uppercase'>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='header-list d-flex align-center'>
                <li className='mr-30'>
                    <img width={18} height={18} src="/img/cart.svg" alt="cart" className='cu-p'/>
                    <span className='ml-10'>1205 руб.</span>
                </li>
                <li className='mt-5'>
                    <img width={18} height={18} src="/img/user.svg" alt="user" className='cu-p'/>
                </li>
            </ul>
        </header>
    )
}
export default Header;