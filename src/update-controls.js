
        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchNameInput.value = searchParams.get('pokemon') || '';
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });