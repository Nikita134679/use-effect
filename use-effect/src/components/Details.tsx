import React, { useEffect, useState } from 'react';

interface UserDetails {
  id: number;
  name: string;
  city: string;
  company: string;
  position: string;
}

interface DetailsProps {
  info: { id: number; name: string };
}

const Details: React.FC<DetailsProps> = ({ info }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!info.id) return;
      setLoading(true);
      const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
      const data = await response.json();
      setUserDetails(data);
      setLoading(false);
    };

    fetchDetails();
  }, [info.id]);

  if (loading) {
    return <div>Loading details...</div>;
  }

  if (!userDetails) {
    return <div>Select a user to see details</div>;
  }

  return (
    <div>
      <h2>{userDetails.name}</h2>
      <p>City: {userDetails.city}</p>
      <p>Company: {userDetails.company}</p>
      <p>Position: {userDetails.position}</p>
    </div>
  );
};

export default Details;
