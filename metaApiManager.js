const MetaApi = require('metaapi.cloud-sdk').default; // Use .default ao importar

async function connectToAccount(accountId) {
    const api = new MetaApi('eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJjNzc1ZWQzOGY0OWYxODIzMDA4Y2NhMjBmYWNmNjhiNSIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7ImlkIjoidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJ0cmFkaW5nLWFjY291bnQtbWFuYWdlbWVudC1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1ycGMtYXBpIiwibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTp3czpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfV0sInRva2VuSWQiOiIyMDIxMDIxMyIsImltcGVyc29uYXRlZCI6ZmFsc2UsInJlYWxVc2VySWQiOiJjNzc1ZWQzOGY0OWYxODIzMDA4Y2NhMjBmYWNmNjhiNSIsImlhdCI6MTcyNjkyODcxNSwiZXhwIjoxNzI3NTMzNTE1fQ.esmwk2XKzzbZ1onW2dJ55CsFR7ri9-9eo8JJ5vRcnBRTyNxfTZ3E2f0gcZGJPOHjUg3pmy4MsIBnpwR6Dol_6dp5mAeqRhZREk5jAa5dZNPDP3ducuG2aonc8LK-PVZQ3sZxX4od5qbC6KS4I5Aymfu_9ZvPzVNJ5U4UPxsiihDsDDzSDSzGtVLMrHH7WLonw3M4gT7kj14A8VsnyzSzBYvO6-f2ppr43kGXk9zVp3cWKfArxaqud-UDXOyqJiPWNp3ObRXSEXiX0igBqkPJDIAj8iT2qqoEw6Fu6rELc2nD0CEM7N1AtloQSCJNohpJ0Sxgwr2I4HK8oxy6R4b_c5FfwcPcauFyx5KsL7wzTp9w55APhVHKhFndlfDxTmHejXxeoKxp5ePVU0cjtFDQLy-mJ1m6ZWuRxxJ9FxQ2V1KxyZMO6_af50MhYWtSbh9IzBX24ukHIugg0eYL095wHLnG0qhQjC6IlCjSUL0R7i4phMYqvOhXeRSwIGcq4hXYMLBQt6QnNKvJ0uxlVtL3PSj9LzLiz9JkdJ8MDINcut9XLTGNGZqFurXRLxvTU0cyWkMXbNZwqRoBoBlR0O0BX9HlVIzB0CU8qN2P0yv1z2ELNrQfs0dn5kyTeCqWZpzIDWWAphmZGbj5dIblQgOnln6g8DCjixsmRP57cl3yKQw'); // Substitua pelo seu token API
    const account = await api.metatraderAccountApi.getAccount(accountId);
    await account.connect(); // Conecte a conta
    console.log("Conectado ao MetaApi com sucesso.");
    return account;
}

module.exports = { connectToAccount };
