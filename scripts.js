document.getElementById('loginButton').addEventListener('click', function() {
    // Redirect to the diagnostics page
    window.location.href = "diagnostics.html";
});


document.getElementById('runDiagnostics').addEventListener('click', function() {
    alert('Diagnostics Running...');
});

document.getElementById('getReport').addEventListener('click', function() {
    alert('Fetching Report...');
});