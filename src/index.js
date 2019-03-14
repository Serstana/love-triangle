/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
 
  preferences.unshift(0);
  let number=0;
  for (let i=1;i<preferences.length;i++){
    for (let k=1;k<preferences.length;k++){
      for (let n=1;n<preferences.length;n++){
        if(preferences[i]==i+k){
          if(preferences[i+k]==i+n){
            if(preferences[i+n]==i){
              number+=1;
            }
          }    
        }
      }
    }
  }
  return number 
}

