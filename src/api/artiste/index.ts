export default (app) => {
  app.post(
    `/tenant/:tenantId/artiste`,
    require('./artisteCreate').default,
  );
  app.put(
    `/tenant/:tenantId/artiste/:id`,
    require('./artisteUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/artiste/import`,
    require('./artisteImport').default,
  );
  app.delete(
    `/tenant/:tenantId/artiste`,
    require('./artisteDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/artiste/autocomplete`,
    require('./artisteAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/artiste`,
    require('./artisteList').default,
  );
  app.get(
    `/tenant/:tenantId/artiste/:id`,
    require('./artisteFind').default,
  );
};