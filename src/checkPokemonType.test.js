const checkType = require('./checkPokemonType')

test("test Bulbasaur", async () => {
    expect(checkType("Bulbasaur")).toBe("Grass")
})

test("test Charmander", async () => {
    expect(checkType("Charmander")).toBe("Fire")
})

test("test Squirtle", async () => {
    expect(checkType("Squirtle")).toBe("Water")
})



// Bulbasaur, Charmander, and Squirtle pokemon
// Write a test suite that assert that each pokemon is the correct type (Grass, Fire, Water).