// Map Object In Javascript
// {
//     let map = new Map()
//     console.log(map);
//     console.log(map.size);

//     //set method
//     let map1 = map.set('key1','javascript')
//     let map2 = map.set('key2','tailwandscript')
//     let map3 = map.set('key3','html')
    
//     console.log(map);
//     console.log(map.size);

//     //get method
//     let map4 = map.get('key1')
//     let map5 = map.get('key2')

//     console.log(map4);
//     console.log(map5);

//     //has method
//     let map6 = map.has('key4')
//     console.log(map6);

//     //delete method
//     let map7 = map.delete('key3')
//     console.log(map7);

//     //clear method
//     // let map8 = map.clear()
//     // console.log(map8);

//     //value
//     let map9 = map.values()
//     console.log(map9);
    
//     //entries
//     let map10 = map.entries()
//     console.log(map10);
    
//     //keys
//     let map11 = map.keys()
//     console.log(map11);
    
//     Map.prototype.forEach()
// }

// Javascript SET Object Method 
{
     // let set = new Set()

     // console.log(set);

     // console.log(set.size);

     // let set1 = set.add([10 , 20])

     // console.log(set1);  
}

{
    let set1 = new Set ([10 , 20 , 30 , 40 , 50])
    let set2 = new Set ([10 , 19 , 30 , 41 , 52])

    console.log(set1);
    console.log(set2);

    //add
    let set3 = new Set()
    set3.add(13)
    set3.add(15)
    set3.add(18)
    console.log(set3);

    //clear
    // let  set4 = new Set()
    // set4.clear()
    // console.log(set4);

    //delete
    // let set5 = new Set()
    // set5.delete(set2)
    // console.log(set5);
    
    //difference
    // let set3 = set2.difference(set1)
    // let set4 = set1.difference(set2)
    // console.log(set3);
    // console.log(set4);

    //entries
    //foreach

    //has
    let set4 = new Set ([10 , 20 , 30 , 40 , 50])
    console.log(set4.has(10));
    
}