const UserList = [
{
    id:1,
    name: "john",
    username: "jboy",
    age: 20,
    nationality: "CANADA",
    friends:[
        {
            id:2,
            name: "pedro",
            username: "pboy",
            age: 20,
            nationality: "UNITED STATES",
        },
        {
            id:4,
            name: "Fafael",
            username: "Ralphinho",
            age: 50,
            nationality: "GERMANY",
        },

    ]
},
{
    id:2,
    name: "pedro",
    username: "pboy",
    age: 20,
    nationality: "UNITED STATES",
},
{
    id:3,
    name: "sarah",
    username: "sgirl",
    age: 25,
    nationality: "BRAZIL",
},
{
    id:4,
    name: "Fafael",
    username: "Ralphinho",
    age: 50,
    nationality: "GERMANY",
},
{
    id:5,
    name: "kelly",
    username: "Kcboy",
    age: 5,
    nationality: "CHILE",
    friends: [
        {
            id:4,
            name: "Fafael",
            username: "Ralphinho",
            age: 50,
            nationality: "GERMANY",
        },
    ]
},
]

const MovieList = [


{
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication : 2019,
    isInCinema: true,
},
{
    id: 2,
    name: "Interstellar",
    yearOfPublication : 2007,
    isInCinema: true,
},
{
    id: 3,
    name: "Superbad",
    yearOfPublication : 2009,
    isInCinema: true,
},
{
    id: 4,
    name: "John Wick 5",
    yearOfPublication : 2022,
    isInCinema: false,
},
];

module.exports = {UserList, MovieList};