// Card.jsx
// ...
function Card({ data, newIndex }) {
    const handleLeftClick = () => {
      newIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 1));
    };
  
    const handleRightClick = () => {
      newIndex((prevIndex) => (prevIndex < reviews.length - 1 ? prevIndex + 1 : 0));
    };
  
    const [imageLoaded, setImageLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
  
    return (
      <div className="flex justify-center items-center bg-slate-400 m-2 w-1/2 rounded-full">
        <div className="flex flex-col md:relative justify-center items-center w-1/2">
          <div className="absolute top-[-2rem] left-[-15rem] z-[10] mx-auto">
            <img
              className={`aspect-square rounded-full w-[240px] h-[240px]z-25 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              src={data.image}
              onLoad={handleImageLoad}
            />
            <div
              className={`w-[240px] h-[240px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10]
            left-[10px] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            ></div>
          </div>
          {/* rest of the component */}
        </div>
      </div>
    );
  }
  // ...
  