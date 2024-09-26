module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'HomeScout - find a place to spend your life.',
        pageHeader: {
            title: 'HomeScout',
            strapline: 'find a place to spend your life beautifully!'
        },
        sidebar: "Looking for a great place to live .",
        locations: [{
            name: 'Vijaya Homes',
            address: '5-4/1/c,Beside Delhi Public School Ghatkesar',
            Contact_Us:'8639009733',
            rating: 3,
            facilities: ['Furnitured', 'False ceiled', 'Wifi','2BHK'],
            distance: '100m'
        }, {
            name: "Krishna's residency",
            address: '30-140/16,Beside madhapur real estates Raidurg',
            Contact_Us:'9550535748',
            rating: 4,
            facilities: ['Swimming pool', 'Garden', ' Fully-Furnished',"4BHK"],
            distance: '200m'
        }, {
            name: 'Pallvi Residency',
            address: 'Flat no:304 street.no:14 Tarnaka',
            Contact_Us:'9392541720',
            rating: 4,
            facilities: ['Lift', 'Premium wifi','3BHk'],
            distance: '250m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};