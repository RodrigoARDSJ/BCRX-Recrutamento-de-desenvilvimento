$(document).ready(function () {
    $('#form').submit(function (event) {
        event.preventDefault()

        var username = $('#nome').val()
        user(username)
        repos(username)
        btn(username)


    })
    function user(username) {
        $.get('https://api.github.com/search/users?q=' + username + '+in:user&per_page=1', function (data) {
            console.log(data);
            if (data.total_count === 0) {
                alert('nenhum usuario encontrado')

            } else {
                data.items.forEach(item => {
                    result = `<br><img class="img-thumbnail col-md-4 rounded mx-auto d-block" src="${item.avatar_url}"/><br>
                    <h1>Nome:</h1><br>
                <h1>${item.login}</h1><br>`
                    $('#user').append(result)

                });
            }
        })

    }

    function repos(username) {
        $.get('https://api.github.com/users/' + username + '/repos', function (data) {
            console.log(data);
            data.forEach(repos => {
                result = `<br><h1>${repos.full_name}</h1>`
                $('#repos').append(result)

            });
        })
    }
    function btn(username) {
        $.get('https://api.github.com/search/users?q=' + username + '+in:user&per_page=1', function (data) {
            data.items.forEach(item => {
                result = `<a href="${item.html_url}"><button class="btn btn-danger">Ver perfil</button>`
                $('#btn').append(result)

            });
        })
    }
})
