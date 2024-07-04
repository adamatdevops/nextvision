/* src/context/GlobalStateProvider-2.tsx */
// import React, { createContext, useContext, useReducer } from 'react';
// import {
//   CurrentIncomesProvider,
//   CurrentIncomesInitialState,
//   CurrentIncomesState,
//   currentIncomesReducer,
//   CurrentIncomesContext,
// } from './CurrentIncomesGSP';
// import {
//   CurrentExpensesProvider,
//   CurrentExpensesInitialState,
//   CurrentExpensesState,
//   currentExpensesReducer,
//   CurrentExpensesContext,
// } from './CurrentExpensesGSP';
// import {
//   FutureIncomesProvider,
//   FutureIncomesInitialState,
//   FutureIncomesState,
//   futureIncomesReducer,
//   FutureIncomesContext,
// } from './FutureIncomesGSP';
// import {
//   FutureExpensesProvider,
//   FutureExpensesInitialState,
//   FutureExpensesState,
//   futureExpensesReducer,
//   FutureExpensesContext,
// } from './FutureExpensesGSP';

// export const GlobalStateContext = createContext({});

// const initialState = {
//   currentIncomes: currentIncomesInitialState,
//   currentExpenses: currentExpensesInitialState,
//   futureIncomes: futureIncomesInitialState,
//   futureExpenses: futureExpensesInitialState,
// };

// const rootReducer = (state, action) => ({
//   currentIncomes: currentIncomesReducer(state.currentIncomes, action),
//   currentExpenses: currentExpensesReducer(state.currentExpenses, action),
//   futureIncomes: futureIncomesReducer(state.futureIncomes, action),
//   futureExpenses: futureExpensesReducer(state.futureExpenses, action),
// });

// export const GlobalStateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(rootReducer, initialState);

//   return (
//     <GlobalStateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };

import React from 'react';
import { CurrentIncomesProvider } from './CurrentIncomesGSP';
import { CurrentExpensesProvider } from './CurrentExpensesGSP';
import { FutureIncomesProvider } from './FutureIncomesGSP';
import { FutureExpensesProvider } from './FutureExpensesGSP';

const GlobalStateProvider: React.FC = ({ children }) => {
  return (
    <CurrentIncomesProvider>
      <CurrentExpensesProvider>
        <FutureIncomesProvider>
          <FutureExpensesProvider>
            {children}
          </FutureExpensesProvider>
        </FutureIncomesProvider>
      </CurrentExpensesProvider>
    </CurrentIncomesProvider>
  );
};

export default GlobalStateProvider;