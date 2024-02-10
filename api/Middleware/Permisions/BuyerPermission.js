const updatePermission=(req,res,next) => {
    if(req.user.uid!=req.params.id){
        return res.status(403).json({error:'you do not have permission to perform this action'});
    }
    next();
    
}
const deletePermission=(req,res,next) => {

    if(req.user.role!='admin' && req.user.uid!=req.params.id){
        return res.status(403).json({error:'you do not have permission to perform this action'});
    }
    next();
    
}
const readPermission=(req,res,next) => {

    if(req.user.role!='admin' && req.user.uid!=req.params.id){
        return res.status(403).json({error:'you do not have permission to perform this action'});
    }
    next();
    
}
module.exports = {updatePermission,deletePermission,readPermission};
