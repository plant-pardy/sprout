export function sortAlphaAscending(plants) {
    plants.sort(function(a, b) {
        let x = a['common-name'].toUpperCase(),
            y = b['common-name'].toUpperCase();
        return x === y ? 0 : x > y ? 1 : -1;
    });
}

export function sortAlphaDescending(plants) {
    plants.sort(function(a, b) {
        let x = a['common-name'].toUpperCase(),
            y = b['common-name'].toUpperCase();
        return y === x ? 0 : y > x ? 1 : -1;
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