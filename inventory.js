function stockList(inventory, searchKeys){
  let list = {};
  let final = "";
  
  for (let i = 0; i < searchKeys.length; i++) {
    for (let n = 0; n < inventory.length; n++) {
      
      if (searchKeys[i] === inventory[n][0]) {
        let num = inventory[n].match(/\d+/g);
        
        num = parseInt(num);
        
        list[searchKeys[i]] ? list[searchKeys[i]] += num
        : list[searchKeys[i]] = num;
        
      } else if (!list[searchKeys[i]]) {list[searchKeys[i]] = 0;}
      
    }
  }
  
  for (x in list) {
    final += `(${x} : ${list[x]}) - `;
  }
  
  return final.replace(/[- ]*$/, '');
}
