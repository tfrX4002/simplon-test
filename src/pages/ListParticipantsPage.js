import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ListParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios.get('/api/participants')
      .then(response => {
        setParticipants(response.data);
      })
      .catch(error => {
        console.error('Error fetching participants:', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Participants</h2>
      <ul>
        {participants.map(participant => (
          <li key={participant.id}>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListParticipantsPage;

