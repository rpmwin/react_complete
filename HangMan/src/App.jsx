import { useEffect, useState } from 'react';

function App() {
  const [answer, setAnswer] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [char, setChar] = useState('');
  const [lengthOfWord, setLengthOfWord] = useState(0);
  const [counter, setCounter] = useState(5);

  const data2 = [
    {
      name: 'VERB',
      options: ['TEST', 'PLAY', 'EAT', 'DRINK', 'SLEEP', 'WALK', 'RUN', 'SING'],
    },
    {
      name: 'FRUIT',
      options: [
        'APPLE',
        'BANANA',
        'ORANGE',
        'PINEAPPLE',
        'MANGO',
        'PAPAYA',
        'STRAWBERRY',
        'POMEGRANATE',
      ],
    },
    {
      name: 'VEGETABLE',
      options: [
        'CARROT',
        'CUCUMBER',
        'POTATO',
        'BEET',
        'CABBAGE',
        'CUCUMBER',
        'POTATO',
        'BEET',
      ],
    },
    {
      name: 'ANIMAL',
      options: [
        'DOG',
        'CAT',
        'LION',
        'TIGER',
        'LEOPARD',
        'HIPPOPOTAMUS',
        'BIRD',
        'HORSE',
      ],
    },
    {
      name: 'FOOD',
      options: ['PIZZA', 'BURGER', 'FRIES', 'SANDWICH', 'TACO'],
    },
    {
      name: 'SPORTS',
      options: [
        'FOOTBALL',
        'CRICKET',
        'BASKETBALL',
        'VOLLEYBALL',
        'TENNIS',
        'SWIMMING',
        'BOXING',
      ],
    },
    {
      name: 'COUNTRY',
      options: [
        'INDIA',
        'USA',
        'CHINA',
        'JAPAN',
        'RUSSIA',
        'FRANCE',
        'GERMANY',
        'SPAIN',
      ],
    },
    {
      name: 'COMPANY',
      options: [
        'GOOGLE',
        'FACEBOOK',
        'AMAZON',
        'MICROSOFT',
        'APPLE',
        'FACEBOOK',
      ],
    },
    {
      name: 'STATES',
      options: [
        'KARNATAKA',
        'TAMILNADU',
        'KERALA',
        'ANDHRAPRADESH',
        'TELANGANA',
        'RAJASTHAN',
        'DELHI',
        'UTTARAKHAND',
      ],
    },
  ];

  const createVariable = () => {
    const randomCategoryIndex = Math.floor(Math.random() * data2.length);
    const category = data2[randomCategoryIndex];
    const items = category.options;
    const randomItemIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomItemIndex];
    setCategoryName(category.name);
    setAnswer(randomItem);
    setLengthOfWord(randomItem.length);
    setCounter(5); // Reset the counter
  };

  const selectedChar = (e) => {
    const char = e.target.textContent;
    setChar(char);
  };

  useEffect(() => {
    if (counter === 0) {
      alert('OOPS, you LOST ...');
      resetGame();
      createVariable();
    } else if (answer === answer.replace(/_/g, '')) {
      alert('Congratulations, you won the game!');
      resetGame();
      createVariable();
    }
  }, [counter, answer]);

  const resetGame = () => {
    setAnswer('');
    setChar('');
  };

  return (
    <>
      <div className="flex">
        <div className="min-h-screen bg-slate-500 flex flex-grow flex-col items-center justify-center">
          <h1 className="text-3xl font-bold underline">{categoryName}</h1>
          <div className="flex text-3xl">
            {answer.split('').map((_, index) => (
              <span key={index} className="underline p-1">
                __
              </span>
            ))}
          </div>
          <br />
          <button
            onClick={createVariable}
            className="bg-orange-400 hover:bg-orange-800 hover:text-white text-2xl p-3 rounded"
          >
            Start Game
          </button>
          <div>Length of Word: {lengthOfWord}</div>
          <div className="keyboard flex flex-col gap-2 w-min items-center p-5 text-xl">
            {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((char) => (
              <button key={char} onClick={selectedChar}>
                <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                  {char}
                </p>
              </button>
            ))}
            {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((char) => (
              <button key={char} onClick={selectedChar}>
                <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                  {char}
                </p>
              </button>
            ))}
            {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((char) => (
              <button key={char} onClick={selectedChar}>
                <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                  {char}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="w-1/3">{counter}</div>
      </div>
    </>
  );
}

export default App;
