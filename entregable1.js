function holamundo(){
    for(let i = 1; i <= 100; i++){
        if (i % 15 == 0) console.log('Hola mundo')
        else if(i % 3 == 0 ) console.log('Hola')
        else if (i % 5 == 0) console.log('Mundo')

        else console.log(i)
    } 
}

holamundo();