class SummerCamp{

    constructor(organizer,location){
        this.organizer = organizer,
        this.location = location,
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500},
        this.listOfParticipants = []

    }


    registerParticipant (name, condition, money){

        if(!this.priceForTheCamp[condition])
        {
            throw new Error("Unsuccessful registration at the camp.")
        }

        
        if(money < this.priceForTheCamp[condition])
        {
            return `The money is not enough to pay the stay at the camp.`
        }

        let theParticipant = this.listOfParticipants.find( x => x.name === name)

        if(theParticipant)
        {
            return `The ${name} is already registered at the camp.`
        }

        this.listOfParticipants.push({
            name :name,
            condition : condition,
            power : 100,
            wins : 0
        })

        return `The ${name} was successfully registered.`
        
    }

    unregisterParticipant (name){
        let theParticipant = this.listOfParticipants.find( x=> x.name === name)

        if(!theParticipant)
        {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        let index = this.listOfParticipants.findIndex(obj => obj === theParticipant)

        this.listOfParticipants.splice(index,1)

        return `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2){

        if(typeOfGame === "WaterBalloonFights")
        {
            let theParticipant1 = this.listOfParticipants.find( x=> x.name === participant1)
            let theParticipant2 = this.listOfParticipants.find( x=> x.name === participant2)

            if(!theParticipant1 || !theParticipant2)
            {
                throw new Error("Invalid entered name/s.")
            }

            if(theParticipant1.condition === theParticipant2.condition)
            {
                     if(theParticipant1.power > theParticipant2.power)
                     {
                        theParticipant1.wins++
                        return `The ${participant1} is winner in the game ${typeOfGame}.`
                     }else if(theParticipant2.power > theParticipant1.power)
                     {
                        theParticipant2.wins++
                        return `The ${participant2} is winner in the game ${typeOfGame}.`
                     }else{
                        return `There is no winner.`
                     }
            }else
            {
                throw new Error("Choose players with equal condition.")
            }


        }else if(typeOfGame === "Battleship")
        {
            let theParticipant = this.listOfParticipants.find( x=> x.name === participant1)

            if(!theParticipant)
            {
                throw new Error("Invalid entered name/s.")
            }

            theParticipant.power += 20

            return `The ${participant1} successfully completed the game ${typeOfGame}.`

        }
    }


    toString () {
        let results =[];
        results.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        this.listOfParticipants.sort( (a,b) => b.wins - a.wins)
                               .map( x=> results.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))

        return results.join("\n")                         

    }
}
