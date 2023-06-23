export default function reducer (context, action) {

switch (action.type) {

        case 'width/decrement':
            return {
                ...context,
                width: context.width - action.payload
            }
            break;

        case 'width/increment':
            return {
                ...context,
                width: context.width + action.payload
            }
            break;

    }

    return context;
}