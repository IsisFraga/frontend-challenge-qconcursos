function apiCall(userName) {

    const getProfileFromGithubService = async () => {
        var myHeaders = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Accept":"application/vnd.github.v3+json",
       });
        const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
       
        let response = await fetch(`https://api.github.com/users/${userName}`, myInit)
        .then(response => {
            return response.json().then(data => data)
    })
    return response
    }

    const getReposFromGithubService = async () => {
        var myHeaders = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Accept":"application/vnd.github.v3+json",
       });
        const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
       
        let response = await fetch(`https://api.github.com/users/${userName}/repos`, myInit)
        .then(response => {
            return response.json().then(data => data)
    })
    return response
    }
    const getFavsFromGithubService = async () => {
        var myHeaders = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Accept":"application/vnd.github.v3+json",
       });
        const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
       
        let response = await fetch(`https://api.github.com/users/${userName}/starred`, myInit)
        .then(response => {
            return response.json().then(data => data)
    })
    return response
    }

    
    return {
      getReposFromGithubService,
      getProfileFromGithubService,
      getFavsFromGithubService
    }
}