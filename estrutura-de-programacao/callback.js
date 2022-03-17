function greeting(name){
    console.log("Name:", name);
}

function processUserInput(callback){
    let name = 'guilherme';
    callback(name);
}

processUserInput(greeting);