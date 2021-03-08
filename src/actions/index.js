export const getPrimeButtons=()=>{
    return fetch('http://localhost:3000/PrimeButtons')
        .then(responce => responce.json())
        .then(responce => responce.items.map(primeButton=>({
            name: primeButton.name,
            id: primeButton.id
        })))
    }

export const getSecondButtons=(id)=>{
    return fetch(`http://localhost:3000/${id}`)
        .then(responce=>responce.json())
        .then(responce=>responce.items.map(secondButton=>({
            name: secondButton.name,
            id: secondButton.id
        })))
}

export const assignPrimeButtons=(primeButtons)=>({
    type: 'ASSIGN_PRIME_BUTTONS',
    primeButtons
})

export const assignSecondButtons=(secondButtons)=>({
    type: 'ASSIGN_SECOND_BUTTONS',
    secondButtons
})