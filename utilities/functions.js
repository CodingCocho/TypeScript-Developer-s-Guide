var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
;
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
    // can return null or undefined
};
// This is rare
var throwError = function (message) {
    throw new Error(message);
};
var throwError2 = function (message) {
    if (!message) {
        throw new Error('no message');
    }
    return message;
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
