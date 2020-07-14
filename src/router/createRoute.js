/* 
* 
*/
function FlatToNested(data, option) {
    option = option || {};
    let idProperty = option.idProperty || "id";
    let parentProperty = option.parentProperty || "pid";
    let childrenProperty = option.childrenProperty || "children";
    let res = [],
      tmpMap = [];
    for (let i = 0; i < data.length; i++) {
      tmpMap[data[i][idProperty]] = data[i];
      if (
        tmpMap[data[i][parentProperty]] &&
        data[i][idProperty] != data[i][parentProperty]
      ) {
        if (!tmpMap[data[i][parentProperty]][childrenProperty])
          tmpMap[data[i][parentProperty]][childrenProperty] = [];
        tmpMap[data[i][parentProperty]][childrenProperty].push(data[i]);
      } else {
        res.push(data[i]);
      }
    }
    return res;
  }
