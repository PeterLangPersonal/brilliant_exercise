// The Employment types that are eligible to receive annivesary gifts
const AnnivesaryEmploymentType = {
    'Full-Time': 'Full-Time',
};

// The Employment types that are eligible to receive new hire gifts
const NewHireEmploymentType = {
    'Full-Time': 'Full-Time',
    'Contract': 'Contract',
};

// Gift IDs matched to time since hired, ideally should live in a singular source of truth
const PreferredGiftId = {
    0: 1233,
    5: 1234,
    10: 1235,
    15: 1236,
    20: 1237,
};

// New hire period to receive gift in days, same with gift ID would be better in a better controlled place
// For a large scale product I would want this to be stored in a database that can be accessed via a browser interface for easy config
const NewHirePeriod = 7;

module.exports = {
    AnnivesaryEmploymentType,
    NewHireEmploymentType,
    PreferredGiftId,
    NewHirePeriod,
};
