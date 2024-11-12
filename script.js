const codeSnippets = [
    { id: 1, title: "Hello World", category: "basics", code: "console.log('Hello World');" },
    { id: 2, title: "Change Background Color", category: "dom-manipulation", code: "document.body.style.backgroundColor = 'blue';" },
    // Tambahkan contoh lainnya
];

function searchCode() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const results = codeSnippets.filter(snippet => snippet.title.toLowerCase().includes(searchInput));

    if (results.length > 0) {
        alert("Found: " + results.map(snippet => snippet.title).join(', '));
    } else {
        alert("No results found");
    }
}
