document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'u') {
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'i') {
                        document.getElementById('birdImage').src = 'maitecuit.png';
                    }
                });
            }
        });
    }
});