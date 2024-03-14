import { useState, useEffect } from "react"


function Data(){
    let contador = 0;
    const [cont, setCont] = useState(0)

    function incrementaState() {
        setCont(cont + 1);
      }
      
      useEffect(() => {
        console.log(cont);
      }, [cont]);

    function decrementaState(){
        setCont(cont - 1)
        // console.log(cont);
    }

    function incrementaVariavel(){
        contador++
        console.log(contador);
    }
    function decrementaVariavel(){
        contador--
        console.log(contador);
    }

  return (
    <div>
        <div>
            <p>Variável (verifique o console...)</p>
            <button onClick={incrementaVariavel}>+</button>
            {contador}
            <button onClick={decrementaVariavel}>-</button>

        </div>
        <p>useState</p>
        <button onClick={incrementaState}>+</button>
        {cont}
        <button onClick={decrementaState}>-</button>
    </div>
  )
}

export default Data

