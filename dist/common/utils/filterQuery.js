"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterQuery(filter, filterOperator) {
    let filterObject = {};
    let orConditions = [];
    if (filter) {
        for (const key of Object.keys(filter)) {
            let data = typeof filter[key] === 'string' ? { $regex: `^${filter[key]}`, '$options': 'i' } : filter[key];
            if (filterOperator === "OR") {
                orConditions.push({ [key]: data });
            }
            else if (filterOperator === "NOT") {
                filterObject = { [key]: { $ne: filter[key] } };
            }
            else {
                filterObject[key] = data;
            }
        }
    }
    if (orConditions.length > 0) {
        if (filterOperator == 'OR') {
            filterObject = {
                $or: orConditions
            };
        }
    }
    return filterObject;
}
exports.default = filterQuery;
//# sourceMappingURL=filterQuery.js.map