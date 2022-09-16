export const divider = (arr) => {
    let id = 0;
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
        id++;
    }
    console.log('data from divider:' ,JSON.stringify(arrayOfImgs));
    return arrayOfImgs
  }