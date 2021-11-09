export function alphaAscending(plants) {
    plants.sort(function(a, b) {
        let x = a['common-name'].toUpperCase(),
            y = b['common-name'].toUpperCase();
        return x === y ? 0 : x > y ? 1 : -1;
    });
}

export function alphaDescending(plants) {
    plants.sort(function(a, b) {
        let x = a['common-name'].toUpperCase(),
            y = b['common-name'].toUpperCase();
        return y === x ? 0 : y > x ? 1 : -1;
    });
}

export function careLevelAscending(plants) {
    plants.sort(function(a, b) {
        return a['care-level'] - b['care-level'];
    });
}

export function careLevelDescending(plants) {
    plants.sort(function(a, b) {
        return b['care-level'] - a['care-level'];
    });
}