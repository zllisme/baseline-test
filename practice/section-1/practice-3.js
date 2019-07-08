'use strict';

function collectSameElements(collectionA, objectB) {
  var c = new Array();
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<objectB['value'].length ; j++)
    {
      if (collectionA[i] == objectB['value'][j])
      {
        c.push(collectionA[i]);
          break;
      }
    }
  }
    return c;
}
