import React, { useState } from 'react';
import { Paper } from '@mui/material';
const FlashcardDeck = () => {
  const [flashcards, setFlashcards] = useState([{ question: '', answer: '' }]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleChange = (e, index) => {
    const newFlashcards = [...flashcards];
    newFlashcards[index][e.target.name] = e.target.value;
    setFlashcards(newFlashcards);
  }

  const handleAddCard = () => {
    setFlashcards([...flashcards, { question: '', answer: '' }]);
  }

  const handleRemoveCard = (index) => {
    const newFlashcards = [...flashcards];
    newFlashcards.splice(index, 1);
    setFlashcards(newFlashcards);
  }

  const handleFlipCard = () => {
    setShowAnswer(!showAnswer);
  }

  const handleNextCard = () => {
    setCurrentIndex(currentIndex + 1);
  }

  const handlePreviousCard = () => {
    setCurrentIndex(currentIndex - 1);
  }

  const renderFlashcard = (flashcard, index) => {
    return (
      <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          name="question"
          placeholder="Question"
          value={flashcard.question}
          onChange={(e) => handleChange(e, index)}
        />
        <input
          name="answer"
          placeholder="Answer"
          value={flashcard.answer}
          onChange={(e) => handleChange(e, index)}
        />
        <button onClick={() => handleRemoveCard(index)}>Remove</button>
      </div>
    );
  }

  return (
    <div>
      {flashcards.map((flashcard, index) => renderFlashcard(flashcard, index))}
      <button onClick={handleAddCard}>Add Card</button>
      <div>
        {currentIndex > 0 && <button onClick={handlePreviousCard}>Previous</button>}
        {currentIndex < flashcards.length - 1 && <button onClick={handleNextCard}>Next</button>}
      </div>
      {flashcards.length > 0 && (
        <div>
          <div>
          <Paper elevation={3} > 
          {showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
          </Paper>
            
          </div>
          <button onClick={handleFlipCard}>Flip</button>
        </div>
      )}
    </div>
  );
}

export default FlashcardDeck;
