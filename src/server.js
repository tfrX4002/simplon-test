const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/?directConnection=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const participantSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  telephone: String,
  email: String,
});

const Participant = mongoose.model('Participant', participantSchema);

app.post('/participants', async (req, res) => {
  const { nom, prenom, telephone, email } = req.body;
  try {
    const participant = await Participant.create({
      nom,
      prenom,
      telephone,
      email,
    });
    res.status(500).json(participant);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement du participant' });
  }
});

app.get('/participants', async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la liste des participants' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
