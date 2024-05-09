const { legacy_createStore } = require("redux");
const { default: countReducer } = require("../reducers/page");

const store = legacy_createStore(countReducer);

export default store;