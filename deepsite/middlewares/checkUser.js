export default async function checkUser(req, res, next) {
  // Bypass all token checks, just call next() always
  next();
}