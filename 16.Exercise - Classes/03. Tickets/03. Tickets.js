function ticketsStatistics(arrOfTickets, sortingCriteria){

    let result = [];

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
        static sort(result, sortingCriteria){
            return result.sort((a, b) => {
                return sortingCriteria === "price" ?
                a[sortingCriteria] - b[sortingCriteria] :
                a[sortingCriteria].localeCompare(b[sortingCriteria])});
        }
    }

    for(let line of arrOfTickets){
        let [destination, price, status] = line.split("|");
        let myTicket = new Ticket(destination, price, status);
        result.push(myTicket);
    }

    return Ticket.sort(result, sortingCriteria);

}