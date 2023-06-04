import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3001/participants', {
        nom,
        prenom,
        telephone,
        email,
      });

      setNom('');
      setPrenom('');
      setTelephone('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Enregistrement des participants</h2>
      <div>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>
      <div>
        <label>Prénom :</label>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      </div>
      <div>
        <label>Téléphone :</label>
        <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      </div>
      <div>
        <label>Email :</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Enregistrer</button>
    </div>
  );
};

export default RegisterPage;
