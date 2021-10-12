function vacation(numberOfPeople, type, dayOfWeek) {
    let sum = 0;

    if (type === 'Business' && numberOfPeople >= 100) {
        numberOfPeople -= 10;
    }

    if (type === 'Students') {
        if (dayOfWeek === 'Friday') {
            sum = numberOfPeople * 8.45;
        } else if (dayOfWeek === 'Saturday') {
            sum = numberOfPeople * 9.80;
        } else if (dayOfWeek === 'Sunday') {
            sum = numberOfPeople * 10.46;
        }
    } else if (type === 'Business') {
        if (dayOfWeek === 'Friday') {
            sum = numberOfPeople * 10.90;
        } else if (dayOfWeek === 'Saturday') {
            sum = numberOfPeople * 15.60;
        } else if (dayOfWeek === 'Sunday') {
            sum = numberOfPeople * 16;
        }
    } else if (type === 'Regular') {
        if (dayOfWeek === 'Friday') {
            sum = numberOfPeople * 15;
        } else if (dayOfWeek === 'Saturday') {
            sum = numberOfPeople * 20;
        } else if (dayOfWeek === 'Sunday') {
            sum = numberOfPeople * 22.50;
        }
    }

    if (type === 'Students' && numberOfPeople >= 30) {
        sum *= 0.85;
    }

    if (type === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        sum *= 0.95;
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");