import { cardsData } from './data';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import Footer from './component/Footer';

function App() {
  const handleButtonClick = () => {
    window.open('https://lichess.org', '_blank');
  };

  return (
    <div className="app">
      <Header />
      <button className="external-link-button" onClick={handleButtonClick}>
        Visit Lichess to Practice
      </button>
      <div className="cards-container">
        {cardsData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            bgColor={card.bgColor}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App;