function townPopulation(data) {
    let populationRegistry = {};

    data.forEach(entry => {
        let [town, population] = entry.split(' <-> ');
        population = Number(population);

        if (populationRegistry[town] !== undefined) {
            populationRegistry[town] += population;
        } else {
            populationRegistry[town] = population;
        }
    });

    for (let town in populationRegistry) {
        console.log(`${town} : ${populationRegistry[town]}`);
    }
}
