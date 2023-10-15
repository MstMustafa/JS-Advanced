class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let result = [];
        result.push("You successfully added candidates:");
        let candidatesList = [];
        for (let line of candidates) {
            let [name, education, experience] = line.split("-");
            experience = Number(experience);
            let candidate = this.jobCandidates.find(obj => obj.name === name);
            if (!candidate) {
                this.jobCandidates.push({
                    name: name,
                    education: education,
                    yearsExperience: experience
                });
            } else {
                if (experience > candidate.yearsExperience) {
                    candidate.yearsExperience = experience;
                }
            }
            if (!candidatesList.includes(name)) {
                candidatesList.push(name);
            }
        }
        result.push(candidatesList.join(', ') + ".");
        return result.join(" ");
    }

    jobOffer(chosenPerson) {
        let [chosenName, minExp] = chosenPerson.split('-');
        minExp = Number(minExp);
        let personName = this.jobCandidates.find(x => x.name === chosenName);
        if (!personName) {
            throw new Error(`${chosenName} is not in the candidates list!`);
        }
        if (minExp > personName.yearsExperience) {
            throw new Error(`${chosenName} does not have enough experience as ${this.position}, minimum requirement is ${minExp} years.`);
        }
        personName.yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${chosenName}.`;
    }

    salaryBonus(name) {
        let candidate = this.jobCandidates.find(obj => obj.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        let education = candidate.education;
        if (education === "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (education === "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length == 0) {
            throw new Error(`Candidate Database is empty!`);
        }
        let result = [];
        result.push('Candidates list:');
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(obj => result.push(`${obj.name}-${obj.yearsExperience}`));
        return result.join("\n");
    }
}
