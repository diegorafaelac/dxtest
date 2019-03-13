({
    doInit: function(cmp,event){
        let action = cmp.get("c.findAll");
        action.setCallback(this,function(response){
            let retorno = response.getReturnValue();
            cmp.set("v.accounts",retorno);
            let event = $A.get("e.c:AccountsLoaded");
            event.setParams({"accounts" : retorno});
            event.fire();
        });
        $A.enqueueAction(action);
    }
})
