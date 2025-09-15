import React from 'react'
import OverlappingCards, { CardData } from '../../components/OverlappingCards'

const cards: CardData[] = [
  { id: 1, color: "bg-red-500", title: "First Card", content: "..." },
  { id: 2, color: "bg-blue-500", title: "Second Card", content: "..." },
  { id: 3, color: "bg-green-500", title: "Third Card", content: "..." },
];


const Banking = () => {
  return (
    <>
     <OverlappingCards
      cards={cards}
      overlapOffset={50}
      cardHeight={100}
      showProgress
      showInstructions
    />
    </>
  )
}

export default Banking