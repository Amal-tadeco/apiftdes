const models = [
  require('./tenant').default,
  require('./auditLog').default,
  require('./settings').default,
  require('./user').default,
  require('./publication').default,
  require('./forum').default,
  require('./demandeAppui').default,
  require('./evenement').default,
  require('./thematique').default,
  require('./tags').default,
  require('./artiste').default,
  require('./espaceArtistique').default,
  require('./categoryEvenement').default,
  require('./categoryPublication').default,
  require('./domaine').default,
];

export default function init(database) {
  for (let model of models) {
    model(database);
  }

  return database;
}

export async function createCollections(database) {
  for (let model of models) {
    await model(database).createCollection();
  }

  return database;
}
