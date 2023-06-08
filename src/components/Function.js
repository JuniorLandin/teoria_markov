 import React, { useState } from 'react'
 import './Function.scss'
 
 const Function = () => {

  //States para Vetor de Probabilidade de Estado
  const [residencial, setResidencial] = useState(0)
  const [comercial, setComercial] = useState(0)
  const [industrial, setIndustrial] = useState(0)
  const [arrayi, setArrayi] = useState([])

  //States para Matriz de Transição de Estado
  const [oneOne, setOneOne] = useState(0)
  const [oneTwo, setOneTwo] = useState(0)
  const [oneThree, setOneThree] = useState(0)
  const [twoOne, setTwoOne] = useState(0)
  const [twoTwo, setTwoTwo] = useState(0)
  const [twoThree, setTwoThree] = useState(0)
  const [threeOne, setThreeOne] = useState(0)
  const [threeTwo, setThreeTwo] = useState(0)
  const [threeThree, setThreeThree] = useState(0)

  //Montando array dessa Matriz
  const [arrayMatriz, setArrayMatriz] = useState([])

  //Terceira Matriz
  const [calc, setCalc] = useState([])


  const checkSum = (res, com, ind) => {
    const sum = parseFloat(res) + parseFloat(com) + parseFloat(ind)
    return sum === 100
  }

  const porcentagem = (res, com, ind) => {
    const porRes = (res / 100).toFixed(2)
    const porCom = (com / 100).toFixed(2)
    const porInd = (ind / 100).toFixed(2)

    return [porRes, porCom, porInd]
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!checkSum(residencial, comercial, industrial)) {
      alert("A soma de residencial, comercial e industrial deve ser igual a 100%")
      return
    }
  
    const porcentagens = porcentagem(residencial, comercial, industrial)

    const array = {
      residencial: porcentagens[0],
      comercial: porcentagens[1],
      industrial: porcentagens[2]
    }

    setArrayi([...arrayi, array])
  
    setComercial('')
    setIndustrial('')
    setResidencial('')
  }

  //Segundo input
  const handleSubmitTwo = (e) => {
    e.preventDefault()

    if (!checkSum(oneOne, oneTwo, oneThree)) {
      alert("A soma da 1º linha tem que ser = 100%")
      return
    }
    if (!checkSum(twoOne, twoTwo, twoThree)) {
      alert("A soma da 2º linha tem que ser = 100%")
      return
    }
    if (!checkSum(threeOne, threeTwo, threeThree)) {
      alert("A soma da 3º linha tem que ser = 100%")
      return
    }
  
  const porcentagens3 = porcentagem(oneOne, oneTwo, oneThree)

    
    const array1 = {
      oneOne: porcentagens3[0],
      oneTwo: porcentagens3[1],
      oneThree: porcentagens3[2],
    }

    const porcentagens1 = porcentagem(twoOne, twoTwo, twoThree)

    const array2 = {
      twoOne: porcentagens1[0],
      twoTwo: porcentagens1[1],
      twoThree: porcentagens1[2]
    }

    const porcentagens2 = porcentagem(threeOne, threeTwo, threeThree)

    const array3 = {
      threeOne: porcentagens2[0],
      threeTwo: porcentagens2[1],
      threeThree: porcentagens2[2],
    }

    setArrayMatriz([array1, array2, array3])
    console.log(array1, array2, array3)

  }

  const handleMultiplicar = (e) => {
    e.preventDefault()

    //Dados do 1 item do array resposta
    const residencial = arrayi.map(items => items.residencial)
    const comercial = arrayi.map(items => items.comercial)
    const industrial = arrayi.map(items => items.industrial)

    const multi = residencial * arrayMatriz[0].oneOne
    const multiFixed = multi.toFixed(2) 

    const multi1 = comercial * arrayMatriz[1].twoOne
    const multiFixed2 = multi1.toFixed(2)

    const multi2 = industrial * arrayMatriz[2].threeOne
    const multiFixed3 = multi2.toFixed(2)


    //Dados do segundo item do array resposta
    const segItem = residencial * arrayMatriz[0].oneTwo
    const segItemFixed = segItem.toFixed(2)

    const segItem2 = comercial * arrayMatriz[1].twoTwo
    const segItemFixed2 = segItem2.toFixed(2)

    const segItem3 = industrial * arrayMatriz[2].threeTwo
    const segItemFixed3 = segItem3.toFixed(2)

    //Dados do terceiro item do array resposta
    const tercItem = residencial * arrayMatriz[0].oneThree
    const tercItemFixed = tercItem.toFixed(2)

    const tercItem1 = comercial * arrayMatriz[1].twoThree
    const tercItemFixed1 = tercItem1.toFixed(2)

    const tercItem2 = industrial * arrayMatriz[2].threeThree
    const tercItemFixed2 = tercItem2.toFixed(2)


    //Soma do primeiro elemento
    const soma1 = parseFloat(multiFixed) + parseFloat(multiFixed2) + parseFloat(multiFixed3);
    const somaFixed = soma1.toFixed(2)
    console.log(somaFixed)

    //Soma do segundo elemento
    const soma2 = parseFloat(segItemFixed) + parseFloat(segItemFixed2) + parseFloat(segItemFixed3);
    const somaFixed1 = soma2.toFixed(2)
    console.log(somaFixed1)

    //Soma do segundo elemento
    const soma3 = parseFloat(tercItemFixed) + parseFloat(tercItemFixed1) + parseFloat(tercItemFixed2);
    const somaFixed2 = soma3.toFixed(2)
    console.log(somaFixed2)

  //Primeira Linha da Matriz resposta = SomaFixed. 
    const arrayResposta = {
      somaFixed: somaFixed,
      somaFixed1: somaFixed1,
      somaFixed2: somaFixed2,
    }

    setCalc([arrayResposta])

    console.log(arrayResposta)
  }






   return (
     <div>
       <h1>Teoria Markov</h1>
       <div className="Forms">
        <form onSubmit={handleSubmit} className='form2'>
          <h3>Vetor de Probabilidade de Estado</h3>
          <div className='Div1'>
            <label>Uso residencial:</label> <br />
            <input
              type='number'
              name='residencial'
              required
              placeholder='Digite um valor'
              value={residencial}
              onChange={(e) => setResidencial(e.target.value)}
              step="5"
            /> <br />

            <label>Uso comercial:</label> <br />
            <input
              type='number'
              name='comercial'
              required
              placeholder='Uso comercial'
              value={comercial}
              onChange={(e) => setComercial(e.target.value)}
              step="5"
            /> <br />
            <label>Uso industrial: </label> <br />
            <input
              type='number'
              name='industrial'
              required
              placeholder='Uso industrial'
              value={industrial}
              onChange={(e) => setIndustrial(e.target.value)}
              step="5"
            /> <br />
            <input className='enviar' type='submit' value="Enviar" />
          </div>
        </form>

        <form className='form2' onSubmit={handleSubmitTwo}>
          <h3>Matriz de Transição de Estado</h3>
          <div>
            <label> 1 para 1: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={oneOne}
              onChange={(e) => setOneOne(e.target.value)}
              step="5"
            />
            <label> 1 para 2: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={oneTwo}
              onChange={(e) => setOneTwo(e.target.value)}
              step="5"            
            />
            <label> 1 para 3: </label>
            <input
               type='number'
               placeholder='Digite um número'
               required
               value={oneThree}
               onChange={(e) => setOneThree(e.target.value)}
               step="5"           
            /> 
            <p>= 100%</p>
            <label> 2 para 1: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={twoOne}
              onChange={(e) => setTwoOne(e.target.value)}
              step="5"            
            />
            <label> 2 para 2: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={twoTwo}
              onChange={(e) => setTwoTwo(e.target.value)}
              step="5"            
            />
            <label> 2 para 3: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={twoThree}
              onChange={(e) => setTwoThree(e.target.value)}
              step="5"            
            />
            <p>= 100%</p>
            <label> 3 para 1: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={threeOne}
              onChange={(e) => setThreeOne(e.target.value)}
              step="5"            
            />
            <label> 3 para 2: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={threeTwo}
              onChange={(e) => setThreeTwo(e.target.value)}
              step="5"            
            />
            <label> 3 para 3: </label>
            <input
              type='number'
              placeholder='Digite um número'
              required
              value={threeThree}
              onChange={(e) => setThreeThree(e.target.value)}
              step="5"            
            />
            <p>= 100%</p>

            <input className='enviar' type="submit" value="Enviar"/>
          </div>
        </form>
       </div>


      <div className='divMap'>

        <div className='divColumn'> 
          <h2>Vetor de Probabilidade de Estado: </h2>
          <ul>
            {arrayi.map((item, index) => (
              <li key={index}>
                <p>{item.residencial} {item.comercial} {item.industrial}</p>
              </li>
              ))}
            </ul>
        </div>


        <div className='divColumn'> 
          <h2>Matriz de Transição de Estado: </h2>
          <ul>
            {arrayMatriz.map((item, index) => (
              <div key={index}>
                <li> {item.oneOne} {item.oneTwo} {item.oneThree}</li>
                <li> {item.twoOne} {item.twoTwo} {item.twoThree} </li>
                <li> {item.threeOne} {item.threeTwo} {item.threeThree}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className='btn'>
          <button onClick={handleMultiplicar}>Multiplicar</button>
        </div>

        <div className='divColumn'>

          <h2>Resposta da multiplicação</h2>
          <ul>
            {calc.map((item, index) => (
              <div key={index}>
                <li>{item.somaFixed} {item.somaFixed1} {item.somaFixed2}</li>
              </div>
            ))}
          </ul>
        </div>

      </div>

     </div>
   )
 }
 
 export default Function
 