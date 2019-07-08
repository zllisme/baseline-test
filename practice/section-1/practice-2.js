'use strict';

function collectSameElements(collectionA, collectionB) {
  var c = new Array();
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionB[0].length ; j++)
    {
      if (collectionA[i] == collectionB[0][j])
      {
        c.push(collectionA[i]);
          break;
      }
    }
  }
    return c;
  return '实现练习要求，并改写该行代码。';
}
