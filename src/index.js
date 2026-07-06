const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route simple pour vérifier que le serveur tourne
app.get('/', (req, res) => {
  res.send('Hello CI/CD!');
});

// Route API (utile pour la partie 4 avec backend/frontend)
app.get('/api/data', (req, res) => {
  res.json({ message: 'Données du backend' });
});

// Ne pas lancer le serveur automatiquement si on est en test
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
}

module.exports = app;  // Exporté pour les tests