import { Monster } from "../../App";

import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (  // 小括号隐式返回
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
