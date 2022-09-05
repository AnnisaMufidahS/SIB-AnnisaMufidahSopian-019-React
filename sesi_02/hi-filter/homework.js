const VideoData = [
    {
        name : 'Miss Scarlet',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Mrs. White',
        present : false,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Reverend Green',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Rusty',
        present : false,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Colonel Mustard',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Professor Plum',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },
]

let result = VideoData.filter((isPresent) => isPresent.present == true);
console.log("Jumlah Present = " + result.length);
console.log(result);
