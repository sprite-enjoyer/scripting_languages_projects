import { Suspense, lazy, useEffect, useState } from "react";
import styles from "./app.module.scss";
const TourCardList = lazy(() => import("./components/TourCardList/TourCardList"));

export interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const LoadingComponent = <h1>Loading...</h1>

const App = () => {

  const [tourData, setTourData] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const handleClick = (id: string) => setTourData(tourData.filter(data => data.id !== id));

  const fetchData = () => {
    //setTimeout is for demonstrating LoadingComponent
    setLoading(true)
    setTimeout(() => {
      fetch("https://course-api.com/react-tours-project")
        .then(async res => setTourData(await res.json() as Tour[]))
        .catch(e => console.error(e));
      setLoading(false);
    }, 1000);
  };

  useEffect(() => fetchData(), []);
  if (loading) return LoadingComponent;

  return (
    <div className={styles["main"]} >
      {
        tourData.length !== 0
          ?
          <TourCardList handleClick={handleClick} tourData={tourData} />
          : <div className={styles["no-tours-left"]} >
            <h2 className={styles["no-tours-left__text"]}> No Tours Left</h2>
            <button onClick={() => fetchData()} className={styles["no-tours-left__btn"]} >Refresh</button>
          </div>
      }
    </div>
  );
};

export default App;
