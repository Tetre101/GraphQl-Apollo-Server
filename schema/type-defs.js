const {gql} = require("apollo-server")

const typeDefs = gql `

type User{
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality:Nationality!
    friends: [User]
    favoriteMovies : [Movie]
}

type Movie{
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInCinema:Boolean!
}


type Query{
    users :[ User!]!
    user(id:ID!): User!
    movies: [Movie!]!
    movie(name:String!): Movie!
}

input createUserInput {
    name: String!
    username: String!
    age: Int!
    nationality:Nationality = BRAZIL
}
input UpdateUsernameInput {
  id: ID!
  newUsername: String!
}


type Mutation{
    createUser(input:createUserInput!): User
    updateUsername(input: UpdateUsernameInput!):User
    deleteUser(id:ID!):User
}

enum Nationality{
    CANADA
    BRAZIL
    CHILE
    GERMANY
    UNITED STATES
}
`;

module.exports = {typeDefs}