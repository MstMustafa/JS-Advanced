class Garden {
	
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];

    }


    addPlant (plantName, spaceRequired){

        if(spaceRequired > this.spaceAvailable)
        {
            throw new Error("Not enough space in the garden.")
        }

        this.plants.push({
            plantName : plantName,
            spaceRequired : spaceRequired ,
            ripe : false,
            quantity : 0
        })

        this.spaceAvailable -= spaceRequired

        return `The ${plantName} has been successfully planted in the garden.`


    }


    ripenPlant(plantName, quantity){

        if(quantity <= 0)
        {
            throw new Error("The quantity cannot be zero or negative.")
        }

        let foundPlant = this.plants.find(x => x.plantName === plantName)

        if(!foundPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if(foundPlant.ripe){
            throw new Error(`The ${plantName} is already ripe.`)
        }

        foundPlant.ripe = true;
        foundPlant.quantity += quantity;

        if(quantity == 1)
        {
            return `${quantity} ${plantName} has successfully ripened.`
        }else{
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName){
        let planttoHarvest = this.plants.find( x=> x.plantName === plantName)

        if(!planttoHarvest)
        {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if(planttoHarvest.ripe)
        {
            let quantity = planttoHarvest.quantity

            let requireSpace = planttoHarvest.spaceRequired
            this.spaceAvailable += requireSpace

            let index = this.plants.indexOf(planttoHarvest)
            this.plants.splice(index,1)

            this.storage.push({
                plantName : plantName,
                quantity : quantity,
            })

            return `The ${plantName} has been successfully harvested.`



        }else{
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
    } 

    generateReport(){
        let result = []

        result.push(`The garden has ${ this.spaceAvailable } free space left.`)

        let string = "Plants in the garden: "

        let sortedPlantNames = this.plants.sort((a,b)=> a.plantName.localeCompare(b.plantName))
                                          .map( x => x.plantName)
                                          .join(", ");

        string += sortedPlantNames;
        result.push(string)

        if(this.storage.length == 0){
            result.push(`Plants in storage: The storage is empty.`)
        }else{
            let storageLine = "Plants in storage: "

            let leftPlants = this.storage.map(x => `${x.plantName} (${x.quantity})`).join(", ")

             

            storageLine +=leftPlants

            result.push(storageLine)
        }

        return result.join("\n")
    }
}
