const user = {
    id: 19210, // number,
    name: 'Erin' //string
    // authentication details TBD based on auth0 research
}

const trip = {
    id: 3920, // number
    name: 'trip name', // string
    location: 'trip location', // string
    expenses: [155, 156, 157], // array of numbers referencing expense IDs
    users: [1, 2, 3], // array of numbers referencing user IDs
}

const expense = {
    id: 234, //number
    trip: 22, // number, references trip ID
    description: 'expense description', // string, describes expense
    location: 'expense location', // string, describes where expense occurred
    paidBy: [3, 5], // array of numbers referencing user IDs. Could be a single number.
    howMuch: 32904, // number, total cost of expense
    whoOwes: [3, 5, 6, 9], // array of numbers referencing user IDs. Expense should be split evenly amongst these
}