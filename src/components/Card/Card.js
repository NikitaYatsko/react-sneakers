import styles from './Card.module.scss'
import {useState} from "react";

const Card = ({id, title, price, imageURL, onFavourite, onPlus, favourited = false}) => {

    const [isAdded, setIsAdded] = useState(false);
    const [isFavourite, setIsFavourite] = useState(favourited);


    const handleFavourite = () => {
        setIsFavourite(!isFavourite);
        onFavourite({title, price, imageURL});
    }

    const handleClick = () => {
        onPlus({id, title, price, imageURL});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
                <img src={!isFavourite ? "/img/heart.svg" : "/img/heart-acitve.svg"} alt="favourite"
                     onClick={handleFavourite}/>
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