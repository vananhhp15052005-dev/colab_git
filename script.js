document.addEventListener('DOMContentLoaded', function() {
    const actionButton = document.getElementById('actionButton');
    
    actionButton.addEventListener('click', function() {
        const names = ['Tom', 'Jerry', 'Spike'];
        alert('Thành viên nhóm:\n' + names.join('\n'));
        console.log('Thành viên nhóm:', names);
    });
});