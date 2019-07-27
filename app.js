const container_div = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.addEventListener('mouseenter', () => {
            item.classList.add('hovered');
        });
        container_div.appendChild(item);
    }
}
