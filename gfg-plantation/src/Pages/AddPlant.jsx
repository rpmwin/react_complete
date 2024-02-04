import React from 'react';
import Card from './components/Card';

function AddPlant() {
  const data = [
    'Rose',
    'Jasmine',
    'Hibiscus',
    'Lavender',
    'Sunflower',
    'Carnation',
    'Lily',
  ];
  const flowers = {
    rose: {
      name: 'Rose',
      color: 'red',
      image:
        'https://images-cdn.ubuy.co.in/65186466b64a6331f9320fa6-red-roses-50-next-day-flowers.jpg',
      Discription:
        'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.',
      price: 100,
    },
    Lily: {
      name: 'Lily',
      color: 'White',
      image:
        'https://assets.flowersnfruits.com/uploads/product-pics/1687350686_12.png',
      Discription:
        'A lily is a woody perennial flowering plant of the genus Lilium, in the family Asteraceae, or the lily of the field.',
      price: 150,
    },
    Hibiscus: {
      name: 'Hibiscus',
      color: 'red',
      image:
        'https://i.pinimg.com/originals/57/8f/80/578f80613a83acfe414c6919161fbcbc.jpg',
      Discription:
        'A hibiscus is a shrub or small tree in the family Hibranchaceae.',
      price: 200,
    },
    Sunflower: {
      name: 'Sunflower',
      color: 'Yellow',
      image:
        'https://media.istockphoto.com/id/1366491129/photo/yellow-sunflowers-grow-in-the-field-agricultural-crops.webp?b=1&s=612x612&w=0&k=20&c=W2EAPtQp4pxN2e52tKonef631lYkh3aPbGUD44cpH_o=',
      Discription:
        'A sunflower is a tall annual of the genus Helianthus, which is native to South and Southeast Asia.',
      price: 250,
    },
    Carnation: {
      name: 'Carnation',
      color: 'pink',
      image:
        'https://b446083.smushcdn.com/446083/wp-content/uploads/sites/7/2016/10/AboutFlowers_S600carnation_Dianthus-Alcazar-Du%CC%88mmenOrange.jpg?lossy=1&strip=1&webp=1',
      Discription:
        'A carnation is a flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.',
      price: 300,
    },
    Lavender: {
      name: 'Lavender',
      color: 'purple',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xqAjQ7N0SzkBxvNYW9xLha2UdVPY33OBmQ&usqp=CAU',
      Discription:
        'A lavender is a woody perennial flowering plant of the genus Lavandula, in the familyLavandulaceae.',
      price: 350,
    },
    Jasmine: {
      name: 'Jasmine',
      color: 'white',
      image:
        'https://gardenerspath.com/wp-content/uploads/2022/05/Arabian-Jasmine-Jasminum-sambac.jpg',
      Discription:
        'A jasmine is a woody perennial flowering plant of the genus Jasminum, in the family Jasminaceae.',
      price: 400,
    },
  };
  return (
    <div>
      <h1 className="text-[150px] font-bold text-center " >Add Plant</h1>
      
      <div className="flex ">
        <div className="text-center w-1/3 bg-slate-500">filter</div>
        <div className="text-center w-[2px]   ml-3  bg-white rounded-lg"></div>

        <div className="flex flex-wrap justify-around text-center  ">
          {Object.values(flowers).map((flower) => (
            <Card key={flower.name} flower={flower} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddPlant;
