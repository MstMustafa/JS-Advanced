function dayOfWeek(day) {
  
    const formattedDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
    
    switch (formattedDay) {
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 5;
        case 'Saturday':
            return 6;
        case 'Sunday':
            return 7;
        default:
            return "error";
    }
}
