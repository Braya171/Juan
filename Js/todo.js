const input = document.querySelector('#text');
const btn = document.querySelector ('#add');
const tasks = document.querySelector('#tasks')

btn.addEventListener('click',() =>
{
console.log(input.value)
const templete = `<p>{input.value}</p>`
;

tasks.insertAdjacentHTML('beforeend', templete);
});