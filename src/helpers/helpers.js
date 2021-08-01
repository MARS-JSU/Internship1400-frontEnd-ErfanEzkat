export const addToLocalStorage=(name,value)=>{
    let values = JSON.parse(localStorage.getItem(name));
    if( values!==null)
        values.push(value);
    else
        values=[value];

	localStorage.setItem(name, JSON.stringify(values));
}
export const removeFromLocalStorage=(name,value)=>{
    let values = JSON.parse(localStorage.getItem(name));
    if( values!==null)
        values  = values.filter(item=>item.title !== value)
    else
        values=[];
        
	localStorage.setItem(name, JSON.stringify(values));
}
export const getFromLocalStorage=(name)=>{
    let values = JSON.parse(localStorage.getItem(name));
    return values;
    
}