document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = { username, password, date: new Date().toISOString() };

        console.log('Новий користувач:', user);

        fakeApiCall(user)
            .then(response => {
                alert('Реєстрація успішна!');
                console.log('Відповідь API:', response);
            })
            .catch(error => {
                alert('Сталася помилка: ' + error);
            });
    });

    function fakeApiCall(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.username && data.password) {
                    resolve({ status: 'success', user: data });
                } else {
                    reject('Невірні дані');
                }
            }, 1500);
        });
    }
});
