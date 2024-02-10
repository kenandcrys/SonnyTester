const verifyRoles=(...allowedRoles) => {
    return (req,res,next) => {
       const rolesArray=[...allowedRoles];
       if(!rolesArray.includes(req.user.role)){
       return res.status(401).json({ error: 'not allowed' });
       }
       next();
    }
    
}

module.exports = verifyRoles;
