let todoData = [
    {
        id: 1,
        label: 'Drink Coffee',
        done: false,
        important: false
    },
    {
        id: 2,
        label: 'Make Awesome App',
        done: false,
        important: true
    },
    {
        id: 3,
        label: 'Have a lunch',
        done: false,
        important: false
    },
];

if(localStorage.getItem('todos') !== null)
    todoData = JSON.parse(localStorage.getItem('todos'));
console.log(JSON.parse(localStorage.getItem('todos')));
export default todoData;