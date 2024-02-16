function extensibleObject(){
    let parent = {};
    let childObj = Object.create(parent);

    childObj.extend = function(obj){
        let objAsArray = Object.entries(obj);
        for(let [key, val] of objAsArray){
            if(typeof(val) == "function"){
                parent[key] = val;
            }else{
                childObj[key] = val
            }
        }
    }
    return childObj;
}