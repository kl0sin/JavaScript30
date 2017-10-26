const peaople = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 20215},
];

const comments = [
    { test: 'Love this!', id: 523423 },
    { test: 'Super good', id: 823423 },
    { test: 'You\'re the best', id: 2039842 },
    { test: 'Ramen in my fav food ever', id: 123523},
    { test: 'Nice Nice Nice!', id: 542328},
];

const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

const comment = comments.find(comment => comment.id === 823423);

const index = comments.findIndex(comment => comment.id === 823423);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1 )
];
