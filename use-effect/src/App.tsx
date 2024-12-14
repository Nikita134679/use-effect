import React, { useState } from 'react';
import List from './components/List';
import Details from './components/Details';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<{ id: number; name: string } | null>(null);

  const handleSelectUser = (user: { id: number; name: string }) => {
    setSelectedUser(user);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <List onSelectUser={handleSelectUser} />
      </div>
      <div>
        {selectedUser ? <Details info={selectedUser} /> : <div>Select a user</div>}
      </div>
    </div>
  );
};

export default App;
