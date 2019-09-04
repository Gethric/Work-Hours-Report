import { data } from '../objects/data'

export const deleteItem = (type, id) => {
    let ids, index;

    ids = data.allHours[type].map(function(current) {
        return current.id;
    });

    index = ids.indexOf(id);

    if (index !== -1) {
        data.allHours[type].splice(index, 1);
    }
};