export default function reducer (context, action) {

switch (action.type) {

        case 'width/set':
            return {
                ...context,
                width: action.payload
            }
            break;
        case 'searchKeyword/set':
            return {
                ...context,
                searchKeyword: action.payload
            }
            
    }

    return context;
}