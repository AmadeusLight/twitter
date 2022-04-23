const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

  test("Return an error object when try to create a new user with an null payload", () => {
    const payload = null
    const result = UserView.createUser(payload)
    // https://jestjs.io/docs/using-matchers#strings
    expect(result.error).toMatch(/payload no existe/)
  })
  const UserService = require('./../services/UserService')

  class UserView{
  
    static createUser(payload){
      if(payload === null){
        console.log("Error es null")
        return {error: "El payload no existe."}
      }
    }
  }
  
  module.exports = UserView
})