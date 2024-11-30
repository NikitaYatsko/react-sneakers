import styles from'./Card.module.scss'
const Card = ({title, price, imageURL, onClick}) => {

    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img src="/img/heart.svg" alt="favourite"/>
            </div>

            <img width={133} height={112} src={imageURL} alt="sneakers"/>
            <p className='mt-15'>{title}</p>
            <div className='d-flex justify-between align-center mt-15'>
                <div className='d-flex flex-column '>
                    <span className='text-uppercase'>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button style={{border: 'none', background: 'transparent'}} onClick={
                    onClick
                }>
                    <img src='img/plus(add).svg' alt="add" className='cu-p'/>
                </button>
            </div>
        </div>
    )
}
export default Card;