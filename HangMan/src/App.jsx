import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [char, setChar] = useState('');
  const [allComplted, setAllComplted] = useState(false);

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

  // let keys = Object.keys(data);
  // console.log(keys);
  const createVariable = () => {
    const randomCategoryIndex = Math.floor(Math.random() * data2.length);
    const category = data2[randomCategoryIndex];
    const items = Object.values(category.options);
    const randomItemIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomItemIndex];
    console.log(randomCategoryIndex);
    console.log(category.name);
    console.log(items);
    console.log(randomItemIndex);
    console.log(randomItem);
    setCategoryName(category.name);
    setAnswer(randomItem);
  };

  const selectedChar = (e) => {
    const char = e.target.textContent;
    setChar(char);
  };

  const splittedAnswer = answer.split('');
  const checkAnswer = useEffect(() => {
    for (let index = 0; index < splittedAnswer.length; index++) {
      const element = document.getElementById(index);
      if (element.innerText === '_') {
        setAllComplted(false);
        break;
      } else {
        setAllComplted(true);
        
      }
    }
    if (!allComplted) {
      for (let index = 0; index < splittedAnswer.length; index++) {
        if (splittedAnswer[index] === char) {
          const element = document.getElementById(index);
          element.innerText = char;
        }
      }
    } else {
      alert("You've completed the game");
    }
  }, [char,answer]);

  return (
    <>
      <div className="min-h-screen bg-slate-500">
        <h1 className="text-3xl font-bold underline">{categoryName}</h1>
        {answer.split('').map((_, index) => (
          <span key={index} className="underline p-1 " id={index}>
            _
          </span>
        ))}
        <br />
        <button onClick={createVariable}>click me</button>
        <div className="keyboard flex flex-col gap-2 w-min items-center p-5">
          <div className="flex gap-2">
            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                Q
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                W
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                E
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                R
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                T
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                Y
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                U
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                I
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                O
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                P
              </p>
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                A
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                S
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                D
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                F
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                G
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                H
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                J
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                K
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                L
              </p>
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                Z
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                X
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                C
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                V
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                B
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                N
              </p>
            </button>

            <button onClick={selectedChar}>
              <p className="p-2 bg-slate-300 rounded w-9 text-center hover:bg-slate-800 hover:text-white">
                M
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// write a functions that can randomly choose a value fom a object and return it
