import { useState } from "react";
import { Tour } from "../../App";
import styles from "./tourCard.module.scss";

export interface TourCardProps extends Tour {
  handleClick: (id: string) => void
}

const TourCard = ({ id, name, image, info, price, handleClick }: TourCardProps) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles["main"]} >
      <img src={image} alt={`${name} picture`} className={styles["top"]} />
      <div className={styles["bottom"]} >
        <div className={styles["bottom__top"]} >
          <span className={styles["bottom__top__title"]} >
            {name}
          </span>
          <span className={styles["bottom__top__price"]} >
            ${price}
          </span>
        </div>
        <div className={styles["bottom__description"]} >
          {expanded ? info : info.substring(0, 250).concat("...")}
          {!expanded && <button onClick={() => setExpanded(true)} className={styles["read-more"]} >read more</button>}
        </div>
        <button onClick={() => handleClick(id)} className={styles["bottom__btn"]} >
          NOT INTERESTED
        </button>
      </div>
    </div>
  );
};

export default TourCard;