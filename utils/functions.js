export const divider = (arr) => {
    let arrayOfImgs = [];
    let current = [...arr]
    let num = 4;
    while( current.length > 0 ){
        arrayOfImgs.push(current.slice(0, num));
        if(num===4){
            current.shift();
            current.shift();
            current.shift();
            current.shift();
            num = 3;
        }else if(num===3){
            current.shift();
            current.shift();
            current.shift();
            num = 4;
        }else{
            current.shift();
            current.shift();
            current.shift();
            num = num;
        }
    }
    console.log('data from divider:' ,JSON.stringify(arrayOfImgs));
    return arrayOfImgs
  }

  export const divider2 = (arr) => {
    let arrayOfImgs = [];
    let current = [...arr]
    let num = 3;
    while( current.length > 0 ){
        arrayOfImgs.push(current.slice(0, num));
        if(num===3){
            current.shift();
            current.shift();
            current.shift();
            num = 2;
        }else if(num===2){
            current.shift();
            current.shift();
            num = 3;
        }else{
            current.shift();
            current.shift();
            num = num;
        }
    }
    console.log('data from divider2:' ,JSON.stringify(arrayOfImgs));
    return arrayOfImgs
  }