const songInfo = {
    name:"song",
    age:33,
    gender:"Male",
    handsome:true,
    favMovies: ["Along the gods", "LOTR", "Oldbody"], 
    favFood: [
        {
            name:"Kimchi", fatty:false}, 
        { 
            name:"Cheese burger", fatty: true
    }
]
}

console.log(songInfo.favFood[0].fatty);
