
import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

// Теперь займемся объединением редюсеров, чтобы передать оба редюсера в стор.
// импортируем ф-ю комбайнРедюсерs, создаем объект комбайнРедюсер, и его полям передаем ссылки на комбинированные редюсеры,
// имена редюсоров будут соответствавать полям объекта комбайнРедюсер.
// для того чтобы отслеживать состояние store instal to yarn add redux react-devtools-extension
// передаем этот devTools 2-м параметром в store