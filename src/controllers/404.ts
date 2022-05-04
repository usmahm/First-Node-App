import { RequestHandler } from "../models/types/genTypes";

export const get404: RequestHandler = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
}