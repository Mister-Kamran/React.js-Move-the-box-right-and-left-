function Test() {
  const [position, setPosition] = useState(0);
  const box_position = useRef(null);

  useEffect(() => {

    const hand_key = (event) => {
      if (event.keyCode === 39) {
        setPosition((position) => position + 10);
           
      }

      if (event.keyCode === 37) {
        setPosition((position) => position - 10);
      }
    };

    window.addEventListener('keydown', hand_key);

   
  }, []);


  useEffect(() => {
    box_position.current.style.left = `${position}px`;

    if(position>100){
      box_position.current.style.backgroundColor ="gold";
    }else{
      box_position.current.style.backgroundColor ="";
    }




  });
