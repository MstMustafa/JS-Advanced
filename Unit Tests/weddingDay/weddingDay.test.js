const weddingDay = require('./weddingDay');
const { assert } = require('chai');

describe("Testing weddingDay functionality", ()=> {

    describe("Testing pickVenue function", ()=> {

        it("should throw error if capacity is not a number", ()=> {
           assert.throw( ()=>weddingDay.pickVenue("space",45,"Burgas"),'Invalid Information!')
        });

        it("should throw error if pricePerGuest is not a number", ()=> {
            assert.throw( ()=>weddingDay.pickVenue(15,"insane","Burgas"),'Invalid Information!')
        });

        it("should throw error if location is not a string", ()=> {
            assert.throw( ()=>weddingDay.pickVenue(25,"insane",25),'Invalid Information!')
        });

        it("should throw error if location is an empty string", ()=> {
            assert.throw( ()=>weddingDay.pickVenue(25,24,""),'Invalid Information!')
        });

        it("should throw error if location is not 'Varna'", ()=> {
            assert.throw( ()=>weddingDay.pickVenue(25,24,"Plovdiv"),'The location of this venue is not in the correct area!')
        });

        it("should return success message if capacity is below 150 and pricePerGuest is less than 120", ()=> {
            const capacity = 150;
            const pricePerGuest = 114;
            assert.equal( weddingDay.pickVenue(capacity,pricePerGuest,"Varna"),`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`)
        });

        it("should return error message if capacity is above 150", ()=> {
            const capacity = 142;
            const pricePerGuest = 114;
            assert.equal( weddingDay.pickVenue(capacity,pricePerGuest,"Varna"),`This venue does not meet your requirements!`)
        });

        it("should return error message if pricePerGuest is not less than 120", ()=> {
            const capacity = 156;
            const pricePerGuest = 150;
            assert.equal( weddingDay.pickVenue(capacity,pricePerGuest,"Varna"),`This venue does not meet your requirements!`)
        });
    });

    describe("Testing otherSpendings function", ()=> {

        it("should calculate spendings without discount", ()=> {
            assert.equal( weddingDay.otherSpendings(["flowers"],["video"],false),`You spend 1800$ for wedding decoration and photography!`)
        });

        it("should calculate spendings with discount", ()=> {
            assert.equal( weddingDay.otherSpendings(["flowers"],["video"],true),`You spend 1530$ for wedding decoration and photography with 15% discount!`)
        });

        it("should throw error if weddingdecorations is not an array", ()=> {
            assert.throw( ()=>weddingDay.otherSpendings("space",["video"],true),'Invalid Information!')
         });
        
         it("should throw error if photography is not an array", ()=> {
            assert.throw( ()=>weddingDay.otherSpendings(["flowers"],27,true),'Invalid Information!')
         });

         it("should throw error if discount is not a boolean", ()=> {
            assert.throw( ()=>weddingDay.otherSpendings(["flowers"],["video"],24),'Invalid Information!')
         });
    });

    describe("Testing tableDistribution", ()=> {

        it("should return advice if guests are below 6", ()=> {
            assert.equal(weddingDay.tableDistribution(5,2),'There is only 3 people on every table, you can join some tables.')
         });

         it("should return table count if guests are above 8", ()=> {
            assert.equal(weddingDay.tableDistribution(10,1),'You have 1 tables with 10 guests on table.')
         });

         it("should throw error if guests is not a number", ()=> {
            assert.throw( ()=>weddingDay.tableDistribution("space",1),'Invalid Information!')
         });

         it("should throw error if tables is not a number", ()=> {
            assert.throw( ()=>weddingDay.tableDistribution(24,""),'Invalid Information!')
         });

         it("should throw error if tables is a negative number", ()=> {
            assert.throw( ()=>weddingDay.tableDistribution(24,-5),'Invalid Information!')
         });

         it("should throw error if guests is a negative number", ()=> {
            assert.throw( ()=>weddingDay.tableDistribution(-24,2),'Invalid Information!')
         });
     });
});
