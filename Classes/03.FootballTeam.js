class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (let line of footballPlayers) {
            let playerName = line.split("/")[0];
            let playerAge = Number(line.split("/")[1]);
            let playerValue = Number(line.split("/")[2]);

            let foundPlayer = this.invitedPlayers.find(x => x.name === playerName);

            if (foundPlayer) {
                if (playerValue > foundPlayer.value) {
                    foundPlayer.value = playerValue;
                }
            } else {
                this.invitedPlayers.push({
                    name: playerName,
                    age: playerAge,
                    value: playerValue
                });
            }
        }

        let invitationList = "You successfully invite ";

        for (let el of this.invitedPlayers) {
            if (!invitationList.includes(el.name)) {
                invitationList += el.name + ", ";
            }
        }

        invitationList = invitationList.slice(0, -2) + ".";
        return invitationList;
    }

    signContract(selectedPlayer) {
        let player = selectedPlayer.split("/")[0];
        let Offerplayer = Number(selectedPlayer.split("/")[1]);

        let offeredPlayer = this.invitedPlayers.find(x => x.name === player);

        if (!offeredPlayer) {
            throw new Error(`${player} is not invited to the selection list!`);
        }

        if (Offerplayer < offeredPlayer.value) {
            let priceDifference = offeredPlayer.value - Offerplayer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${player}, ${priceDifference} million more are needed to sign the contract!`);
        }

        offeredPlayer.value = "Bought";
        return `Congratulations! You sign a contract with ${player} for ${Offerplayer} million dollars.`;
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(x => x.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age < age) {
            let difference = age - player.age;

            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    } 

    transferWindowResult() {
        let results = [];
        results.push(`Players list:`);

        this.invitedPlayers.sort((a, b) => a.name - b.name).map((x) => results.push(`Player ${x.name}-${x.value}`));

        return results.join("\n");
    }
}
