var profile = {
    profileName: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lang: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age, profileName = profile.profileName;
var _a = profile.coords, lat = _a.lat, lang = _a.lang;
