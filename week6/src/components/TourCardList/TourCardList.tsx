import styles from "./tourCardList.module.scss";
import { Tour } from "../../App";
import TourCard from "../TourCard/TourCard";

export interface TourCardListProps {
  tourData: Tour[];
  handleClick: (id: string) => void;
}

const TourCardList = ({ tourData, handleClick }: TourCardListProps) => {
  return (
    <div className={styles["tours-list"]} >
      {tourData.map((data: Tour) => <TourCard handleClick={handleClick} key={data.id} {...data} />)}
    </div>
  );
};

export default TourCardList;

