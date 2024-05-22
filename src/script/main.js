import data  from "./notes.js";

function main() {
    // const baseUrl = 'https://notes-api.dicoding.dev/v2';

    const getBook = () => {
        
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            const responseJson = JSON.parse(this.responseText);

            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.books);
            }

        };

        xhr.onerror = function () {
            // showResponseMessage();
            console.log('Ups something error');
        };

        xhr.open('GET', 'https://notes-api.dicoding.dev/v2/notes');
        // xhr.open('GET', `${baseUrl}/list`);

        xhr.send();

    };
        

    document.addEventListener('DOMContentLoaded', () => {
        const inputTitle = document.querySelector('#inputTitle');
        const inputBody = document.querySelector('#inputBody');
        
        const btnAddNotes = document.querySelector('#addNewNotes');
        
        btnAddNotes.addEventListener('click', function() {
            const note = {
                id: `notes-${Math.random().toString(36).substring(2, 9)}`,
                title: inputTitle.value,
                body: inputBody.value,
                createdAt: new Date().toISOString(),
                archives: false
            };

            data.push(note);

            getBook();
            const formApp = document.querySelector('form-app');
            formApp.render();
        });
    });

}

export default main;