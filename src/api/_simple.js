

const _getSimpleData = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch('https://simple-storage.vigdorov.ru/auth', {
        method: 'POST',
        body: JSON.stringify({
            login: 'test_user',
        }),
        headers,
    })
        .then(response => {
            return response.text();
        })
        .then(authToken => {
            const authHeaders = new Headers({
                'content-type': 'application/json',
                Authorization: authToken,
            });

            fetch('https://simple-storage.vigdorov.ru/storages', {
                method: 'GET',
                headers: authHeaders,
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const storage = data[0];

                    fetch(`https://simple-storage.vigdorov.ru/storages/${storage.id}`, {
                        method: 'GET',
                        headers: authHeaders,
                    })
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            console.log({data});
                        });
                });
        });
};

export const getSimpleData = async () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    const responseAuth = await fetch('https://simple-storage.vigdorov.ru/auth', {
        method: 'POST',
        body: JSON.stringify({
            login: 'test_user',
        }),
        headers,
    });

    const authToken = await responseAuth.text();

    const authHeaders = new Headers({
        'content-type': 'application/json',
        Authorization: authToken,
    });

    const responseStorageList = await fetch('https://simple-storage.vigdorov.ru/storages', {
        method: 'GET',
        headers: authHeaders,
    });

    const storageList = await responseStorageList.json();

    const storageId = storageList.find(storage => storage.storageName === 'test-storage').id;

    const responseStorage = await fetch(`https://simple-storage.vigdorov.ru/storages/${storageId}`, {
        method: 'GET',
        headers: authHeaders,
    });

    const {data} = await responseStorage.json();

    return data;
};
