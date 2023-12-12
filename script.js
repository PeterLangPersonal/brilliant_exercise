const moment = require('moment');

const { AnnivesaryEmploymentType, NewHireEmploymentType, PreferredGiftId, NewHirePeriod } = require('./consts/gifting')
// This import could be done a few ways
// 1. Script could accept the file path as an argument which would maximize reuse
// 2. Script could store file path as an env variable which would make environment testing and config easier, and hide path naming
// 3. Simple import works to just get the data
const data = require('./test.json');

// Output json object
const output = {};

console.log('Starting script');

const pushToOutput = (employee, yearDiff) => {
    // Push if key already exists
    // Otherwise create key
    if (output[yearDiff]) {
        output[0].push({
            name: employee.name,
            email: employee.email,
            hire_date: employee.hire_date,
            preferred_gift_id: PreferredGiftId[yearDiff],
        })
    } else {
        output[yearDiff] = [
            {
                name: employee.name,
                email: employee.email,
                hire_date: employee.hire_date,
                preferred_gift_id: PreferredGiftId[yearDiff],
            },
        ]
    } 
};

// Map employee list into gifting object
// Group by year: 0(new hire 7 days), 5 years, 10 years, 15 years, 20 years
data.forEach(employee => {
    try {
        const hireDate = moment(employee.hire_date);

        // If exactly on the day of the new hire gift, push to output json
        // Check employee type is allowed
        const dayDiff =  moment().diff(hireDate, 'days');
        if (Object.keys(NewHireEmploymentType).includes(employee.employment_type)) {
            if (dayDiff === NewHirePeriod) {
                pushToOutput(employee, 0);
            }
        }
    
        // If exactly day of anniversary, push to output json
        // Check curent day and month matches hire date
        // Check employee type is allowed
        const yearDiff = moment().diff(hireDate, 'years');
        if (moment().month() === hireDate.month() && 
            moment().date() === hireDate.date() &&
            Object.keys(AnnivesaryEmploymentType).includes(employee.employment_type) &&
            Object.keys(PreferredGiftId).includes(yearDiff.toString())) {
            pushToOutput(employee, yearDiff);
        }
    } catch (error) {
        console.error(`Failed with ${error} on employee ${employee.name}`)
    }
});

console.log('Script complete');
console.log(output);