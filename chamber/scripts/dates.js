document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("currentyear").textContent = "©" + new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified : " + document.lastModified;

    // Set the timestamp value on page load
    document.getElementById('timestamp').value = new Date().toISOString();
});

