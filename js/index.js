function devuelveTrue() {
    return true
}

async function UnaPromesa() {
    return setTimeout(() => console.log("promesa"), 8000)
}

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 8
    }
}