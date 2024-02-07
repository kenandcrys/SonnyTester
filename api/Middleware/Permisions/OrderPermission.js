const readPermission=(user,order) => {        
      return (
     user.role=='admin' || order.user_id==user.uid
    )
       
}
const insertPermission=(req,res,next) => {
    if(req.user.uid!=req.body.user_id){
        return res.status(403).json({error:'you do not have permission to perform this action'});
    }
    next();   
}

const updatePermission=(req,res,next) => {
    if(req.user.uid!=req.body.user_id){
        return res.status(403).json({error:'you do not have permission to perform this action'});
    }
    next();
    
}


module.exports = {updatePermission,readPermission,insertPermission};
