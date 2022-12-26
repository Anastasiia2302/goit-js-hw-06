const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

for (const item of itemEl) {

const titleEl = item.querySelector('h2');
console.log(`Category: ${titleEl.textContent}`);


const listEl = item.querySelectorAll('li');
console.log(`Category: ${listEl.length}`);

}


