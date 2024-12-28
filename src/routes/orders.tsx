import styles from "./orders.module.css";

const cardData = [
  {
    id: 1,
    title: "Total Revenue",
    amount: "$13,782.22",
    historicalAmount: "$2,403",
    result: "positive",
  },
  {
    id: 2,
    title: "Sales",
    amount: "$7,882.78",
    historicalAmount: "$2,403",
    result: "positive",
  },
  {
    id: 3,
    title: "Active Now",
    amount: "",
    historicalAmount: "",
    result: null,
  },
  {
    id: 4,
    title: "Subscriptors",
    amount: "+9",
    historicalAmount: "-250",
    result: "negative",
  },
];

export const Orders = () => {
  return (
    <div className={styles.container}>
      <h1>Orders</h1>
      <div className={styles.cards}>
        {cardData.map((card) => (
          <div key={card.id} className={`${styles.card} ${card.result ? styles[card.result] : ''}`}>
            <h3>{card.title}</h3>
            <p className={styles.amount}>{card.amount || "N/A"}</p>
            <p className={styles.historicalAmount}>
              Historical: {card.historicalAmount || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
