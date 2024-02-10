
function filterQuery(filter,filterOperator):any {

    let filterObject:any = {};
    let orConditions = [];

    if (filter) {
      for (const key of Object.keys(filter)) {
          let data = typeof filter[key] === 'string' ? {$regex:`^${filter[key]}`,'$options' : 'i'}: filter[key]
        if(filterOperator === "OR"){
          orConditions.push({[key] : data});
        }else if(filterOperator === "NOT"){
              filterObject =  { [key]: { $ne: filter[key] } }
        }else{
          //AND condition apply
          filterObject[key] =data
        }
      }
    }

    if (orConditions.length > 0) {
      if(filterOperator == 'OR'){
        filterObject = {
          $or: orConditions
        };
      } 
    }
  return filterObject
}

export default filterQuery