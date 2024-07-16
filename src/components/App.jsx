import css from '../css/App.module.css';

import { Profile } from './User';
import { Friends } from './Friends';
import { Statistics } from './Statistics';
import { Transactions } from './TransactionHistory';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile></Profile>
      <Statistics></Statistics>
      <Friends></Friends>
      <Transactions></Transactions>
    </div>
  );
};
