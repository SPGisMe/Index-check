function stockList(listOfArt, listOfCat){
  let list = {};
  let final = "";
  
  for (let i = 0; i < listOfCat.length; i++) {
    for (let n = 0; n < listOfArt.length; n++) {
      
      if (listOfCat[i] === listOfArt[n][0]) {
        let num = listOfArt[n].match(/\d+/g);
        
        num = parseInt(num);
        
        list[listOfCat[i]] ? list[listOfCat[i]] += num
        : list[listOfCat[i]] = num;
        
      } else if (!list[listOfCat[i]]) {list[listOfCat[i]] = 0;}
      
    }
  }
  
  for (x in list) {
    final += `(${x} : ${list[x]}) - `;
  }
  
  return final.replace(/[- ]*$/, '');
}
