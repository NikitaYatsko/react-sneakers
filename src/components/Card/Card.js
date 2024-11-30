import styles from './Card.module.scss'
import {useState} from "react";

const Card = ({title, price, imageURL, onFavourite, onPlus}) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        onPlus({title, price, imageURL});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img src="/img/heart.svg" alt="favourite" onClick={onFavourite}/>
            </div>

            <img width={133} height={112} src={imageURL} alt="sneakers"/>
            <p className='mt-15'>{title}</p>
            <div className='d-flex justify-between align-center mt-15'>
                <div className='d-flex flex-column '>
                    <span className='text-uppercase'>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img src={isAdded ? 'img/plus(added).svg' : 'img/plus(add).svg'} alt="add" className='cu-p '
                     onClick={handleClick}/>
            </div>
        </div>
    )
}
export default Card;