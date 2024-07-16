import React, { useRef, useState, useLayoutEffect } from "react";
import { Card } from "../Card";

export const BarCard: React.FC = () => {
  const [showCards, setShowCards] = useState(true);
  const [containerHeight, setContainerHeight] = useState("auto");
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const cardsData = [
    { texto: "Card 1", cor: "red", tamanho: 10 },
    { texto: "Card 2", cor: "blue", tamanho: 20 },
    { texto: "Card 3", cor: "green", tamanho: 15 },
  ];


  const handleShowCards = () => {
    setShowCards((prevState) => !prevState);
  };

  useLayoutEffect(() => {
    if (cardContainerRef.current) {
      setContainerHeight(`${cardContainerRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    <div>
      <div
        className="card-container"
        ref={cardContainerRef}
        style={{
            height: showCards ? containerHeight : "0px",
            transition: "height 0.3s ease-in-out",
            overflow: "hidden",
        }}
      >
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
        <button onClick={handleShowCards}>
          {showCards ? "Esconder Cards" : "Mostrar Cards"}
        </button>
    </div>
  );
};