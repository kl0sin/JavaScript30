const panels = document.querySelectorAll('.panel');

function toggleOpen(e) {
    const selectPanel = this.classList;
    if (selectPanel.contains('open' || 'open-active')) {
        selectPanel.remove('open', 'open-active');
    } else {
        panels.forEach(panel => panel.classList.remove('open', 'open-active'));
        selectPanel.add('open', 'open-active');
    };
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
