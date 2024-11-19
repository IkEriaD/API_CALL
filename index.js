// FETCH METHOD 
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));

// POST METHOD 
const data = [{
    title: 'This is title',
    body: 'This is body',
    userID: 1
},

{
    title: 'This is title',
    body: 'This is body',
    userID: 2
},
{
    title: 'This is title',
    body: 'This is body',
    userID: 3
}
]



fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
})
    .then(res => res.json())
    .then((data) => console.log(data));




    