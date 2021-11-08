export function sortAlphaAscending(plants) {
    plants.sort(function(a, b) {
        return a['common-name'] - b['common-name'];
    });
}

export function sortAlphaDescending(plants) {
    plants.sort(function(a, b) {
        return b['common-name'] - a['common-name'];
    });
}

export function sortCareLevelAscending(plants) {
    plants.sort(function(a, b) {
        return a['care-level'] - b['care-level'];
    });
}

export function sortCareLevelDescending(plants) {
    plants.sort(function(a, b) {
        return b['care-level'] - a['care-level'];
    });
}