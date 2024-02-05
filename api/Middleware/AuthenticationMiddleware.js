const admin= require('../firebase-config');

const AuthenticationMiddleware = async (req, res, next) => {
    if (!req.header('Authorization')|| !req.header('Authorization').split(" ")[1]) {
      return res.status(401).json({ error: 'Unauthorized: No ID token provided' });
    }
    const idToken = req.header('Authorization').split(" ")[1];
    let checkRevoked = true;
    admin.auth().verifyIdToken(idToken,checkRevoked)
    .then((decodedToken) => {
      req.uid =decodedToken.uid;
      req.role=decodedToken.role; 
      next(); 
    })
    .catch((error) => {
      console.error('Error verifying Firebase ID token:', error);
      return res.status(401).json({ error: 'Unauthorized' });
    });


  };
  module.exports = AuthenticationMiddleware;
