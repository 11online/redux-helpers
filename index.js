/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author 11 Online - Eric Debelak
*/

exports.mergeState = function(state, payload) {
    //if the payload is an array, map through it
    if (payload.length > 0) {
        // eslint-disable-next-line
        payload.map((item) => {
            state[item.id] = item;
        });
    } else {
        //if the payload is a single object, add that to state
        state[payload.id] = payload;
    }
    return state;
};


exports.deleteFromState = function(state, payload) {
    if(typeof state[payload.id] !== 'undefined') {
        delete state[payload.id];
    }
    return state;
};