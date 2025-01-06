import styles from './Card.module.scss'
import {useState} from "react";
import ContentLoader from "react-content-loader"


const Card = ({
                  added = false,
                  id,
                  title,
                  price,
                  imageURL,
                  onFavourite,
                  onPlus,
                  favourited = false,
                  loading = false
              }) => {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavourite, setIsFavourite] = useState(favourited);

    const handleFavourite = () => {
        setIsFavourite(!isFavourite);
        onFavourite({id, title, price, imageURL});
    }

    const handleClick = () => {
        onPlus({id, title, price, imageURL});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            {loading ? <ContentLoader
                speed={1}
                width={210}
                height={230}
                viewBox="0 0 210 230"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"

            >
                <rect x="0" y="0" rx="3" ry="3" width="167" height="120"/>
                <rect x="0" y="160" rx="10" ry="20" width="167" height="20"/>
                <rect x="0" y="135" rx="10" ry="10" width="167" height="20"/>
                <rect x="0" y="190" rx="5" ry="5" width="100" height="32"/>
                <rect x="134" y="190" rx="10" ry="10" width="32" height="32"/>
            </ContentLoader> : <>
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
            </>}

        </div>
    )
}
export default Card;