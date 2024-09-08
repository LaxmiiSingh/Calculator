document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('history-list');
    const backButton = document.getElementById('back-button');
    const clearHistoryButton = document.getElementById('clear-history-button');
    const emptyMessage = document.getElementById('empty-message');

    // Load and display history
    let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    function displayHistory() {
        historyList.innerHTML = '';
        if (history.length === 0) {
            emptyMessage.classList.remove('hidden');
        } else {
            emptyMessage.classList.add('hidden');
            history.forEach((entry) => {
                const listItem = document.createElement('li');
                listItem.textContent = entry;
                historyList.appendChild(listItem);
            });
        }
    }

    // Clear history function
    function clearHistory() {
        history = [];
        localStorage.removeItem('calculatorHistory');
        displayHistory();
    }

    // Event listeners
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Go back to the calculator page
    });

    clearHistoryButton.addEventListener('click', clearHistory);

    displayHistory();
});
