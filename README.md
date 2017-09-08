# 11online Redux Helpers

Some helpful helper functions from merging state and deleting from state.

Current version only uses `id`.

Import like so: `import {mergeState, deleteFromState} from '11online-redux-helpers';`

Use like so in your reducer:

```
case POST_ACTIVITY_SUCCESS:
	return {
	    ...state,
	    isFetching: false,
	    error: [],
	    activities: mergeState(state.activities, action.payload)
	};
```

or 

```
case DELETE_ACTIVITY_SUCCESS:
    return {
        ...state,
        isFetching: false,
        error: [],
        activities: deleteFromState(state.activities, action.payload)
    };
```