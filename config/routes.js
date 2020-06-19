
import controllers from '../src/controllers/Controller';

export default (app) => {
  // User ROUTES
  app.get(`/api/User`, controllers.getAll);
  app.post(`/api/User`, controllers.insert);
}