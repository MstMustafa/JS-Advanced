class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const flight = this.flights.find(x => x.flightNumber === flightNumber);

        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({
            flightNumber,
            destination,
            departureTime,
            price
        });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find(obj => obj.flightNumber === flightNumber);

        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        let price = flight.price;

        this.bookings.push({
            passengerName: passengerName,
            flightNumber: flightNumber,
            price: price
        });

        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const cancelBook = this.bookings.find(x => x.passengerName === passengerName && x.flightNumber === flightNumber);

        if (!cancelBook) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        let index = this.bookings.indexOf(cancelBook);
        this.bookings.splice(index, 1);

        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        let result = [];

        if (this.bookings.length === 0) {
            throw new Error("No bookings have been made yet.");
        }

        if (criteria === "all") {
            result.push(`All bookings(${this.bookingsCount}):`);

            this.bookings.forEach(x => {
                result.push(`${x.passengerName} booked for flight ${x.flightNumber}.`);
            });
        } else if (criteria === "cheap") {
            let cheapFlights = this.bookings.filter(obj => obj.price <= 100);

            if (cheapFlights.length === 0) {
                return `No cheap bookings found.`;
            } else {
                result.push(`Cheap bookings:`);
                cheapFlights.forEach(x => {
                    result.push(`${x.passengerName} booked for flight ${x.flightNumber}.`);
                });
            }
        } else if (criteria === "expensive") {
            let expensiveFlights = this.bookings.filter(obj => obj.price > 100);

            if (expensiveFlights.length === 0) {
                return "No expensive bookings found.";
            } else {
                result.push(`Expensive bookings:`);
                expensiveFlights.forEach(x => {
                    result.push(`${x.passengerName} booked for flight ${x.flightNumber}.`);
                });
            }
        }

        return result.join("\n").trim();
    }
}
