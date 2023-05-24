import React from 'react';
import Profile from '../components/profile/profile.jsx';
import user from '../data/user.json';

import data from '../data/data.json';
import Statistics from '../components/statistics/statistics.jsx';

import friends from '../data/friends.json';
import FriendList from '../components/friends/friendList.jsx';

import transactions from '../data/transactions.json';
import TransactionHistory from '../components/transaction/TransactionHistory.jsx';

<link rel="stylesheet" href="styles.css" />;

export const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
