/**
 * Created by shira on 26/08/2017.
 */
export default function({ dispatch }) {
    return next => action => {
        // If action has no payload or payload does not have 'then' property,
        // send it on to next middleware
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure the action's promise resolves
        action.payload
            .then(response => {
                // Create new action with promise overridden by data
                const newAction = { ...action, payload: response };
                dispatch(newAction);
            });

    };
}