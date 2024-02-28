import { useState } from "react"


function Data(){
    let contador = 0;
    const [cont, setCont] = useState(0)

    function incrementa(){
        setCont(cont + 1)
    }
    function decrementa(){
        setCont(cont - 1)
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
        <button onClick={incrementa}>+</button>
        {cont}
        <button onClick={decrementa}>-</button>
    </div>
  )
}

export default Data

