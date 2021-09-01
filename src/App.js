import { useDispatch, useSelector } from 'react-redux'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  console.log('cash', cash);
  const addCash = (cash) => { dispatch({ type: "ADD_CASH", payload: cash }) }
  const getCash = (cash) => { dispatch({ type: "GET_CASH", payload: cash }) }
  return (
    <div className="App">
      <header className="App-header">

        <div style={{ fontSize: "3rem", marginBottom: 10 }}>Баланс: {cash}</div>
        <div style={{ display: "flex" }}>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять со  счета</button>
        </div>
      </header>
    </div>
  );
}

export default App;
// Заключение
// Есть dispatch в него передается action, то как action будет изменять состояние определено внутри reducer
// reducer это чистая ф-я, к-я принимает состояние  и всегда возвращает новый объект state
// Этот reducer передается в store и с помощью Provider передается в компонент App.js в которых это состояние мы и используем
