const recipeSelection = require('./recipeSelection');
const { assert , expect} = require('chai');

describe("Testing recipeSelection functionality", function() {
    describe("Testing isTypeSuitable function", function() {

        it("Should not be suitable for vegetarians if type is Meat", ()=> {
            assert.equal(recipeSelection.isTypeSuitable("Meat","Vegetarian"),"This recipe is not suitable for vegetarians")
        });

        it("Should not be suitable for vegans if type is Meat", ()=> {
            assert.equal(recipeSelection.isTypeSuitable("Meat","Vegan"),"This recipe is not suitable for vegans")
        });

        it("Should not be suitable for vegans if type is Dairy", ()=> {
            assert.equal(recipeSelection.isTypeSuitable("Dairy","Vegan"),"This recipe is not suitable for vegans")
        });

        it("Should be suitable for vegetarians if type is Fruits", ()=> {
            assert.equal(recipeSelection.isTypeSuitable("Fruits","Vegetarian"),"This recipe is suitable for your dietary restriction")
        });

        it("Should be suitable for vegans if type is Fruits", ()=> {
            assert.equal(recipeSelection.isTypeSuitable("Fruits","Vegan"),"This recipe is suitable for your dietary restriction")
        });

        it("Type should be a string", ()=> {
            assert.throw( ()=>recipeSelection.isTypeSuitable("Fruits",35),"Invalid input")
        });

        it("Dietary restriction should be a string", ()=> {
            assert.throw( ()=>recipeSelection.isTypeSuitable(true,"Vegan"),"Invalid input")
        });

     });

     describe("Testing isItAffordable function", function() {
         
        it("Budget under 0 should return an error message",()=>{
             assert.equal(recipeSelection.isItAffordable(350,200),"You don't have enough budget to afford this recipe")
        })

        it("Should return success message if budget is sufficient",()=>{
            assert.equal(recipeSelection.isItAffordable(200,359),"Recipe ingredients bought. You have 159$ left")
       })

       it("Price should be a number", ()=> {
        assert.throw( ()=>recipeSelection.isItAffordable("",200),"Invalid input")
         });

         it("Budget should be a number", ()=> {
            assert.throw( ()=>recipeSelection.isItAffordable(350,false),"Invalid input")
             });

     });

     describe("Testing getRecipesByCategory functionality",()=>{

           it("Recipes should be an array",()=>{
                assert.throw( ()=> recipeSelection.getRecipesByCategory("","string"),"Invalid input")
           })

           it("Category should be a string",()=>{
            assert.throw( ()=> recipeSelection.getRecipesByCategory([{ title: " Spicy Tofu Stir-Fry ", category: " Asian " }],60),"Invalid input")
       })

       it("Should return recipe title for matching category",()=>{
            assert.equal(recipeSelection.getRecipesByCategory([{ title: " Spicy Tofu Stir-Fry ", category: " Asian " }]," Asian ")," Spicy Tofu Stir-Fry ")
       })
     })
});
