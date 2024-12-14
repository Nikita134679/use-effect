import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

interface ListProps {
  onSelectUser: (user: User) => void;
}

const List: React.FC<ListProps> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
