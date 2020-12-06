function buildChallengeFront (data) {

    const createListOfRepos = (data) => {
        let listOfReposReturn = ''

        data.forEach(function(repo, index){
            if (index < 5) {
                listOfReposReturn += createRepo(repo.name, repo.svn_url)
            }
        })
        return listOfReposReturn
    }

    const createRepo = (repoName, repoUrl) => {
        return `
        <a class="names__txt" href="${repoUrl}" target="_blank">
       ${repoName}
      </a>
      `
    }
    const createHtml = (data, type) => {
        let description = 'repositórios'
        if (type === 'fav') {
            description = 'favoritos'
        }
        return (`
        <div class="challenge__github--repositories">
        <h3 class="card-align">
          Lista dos ${description}
        </h3>
        <div class="names">
            ${createListOfRepos(data)}
        </div>
      </div>
        `)
    }

    const listRepos = (data, type) => {
        document.querySelector('.challenge__github--repositories').innerHTML = createHtml(data, type)
        
    }

    const editProfile = (data) => {
        const addImg = () => {
            document.querySelector("#myImg").src = data.avatar_url;
        } 
        const addProfileLink = () => {
            document.querySelector("#profileLink").href = data.html_url;
        } 
        const addReposNumber = () => {
            document.querySelector("#reps").textContent = data.public_repos;
        } 
        const addFollsNumber = () => {
            document.querySelector("#folls").textContent = data.followers;
        } 
        const addFolliNumber = () => {
            document.querySelector("#folli").textContent = data.following;
        } 

        addImg()
        addProfileLink()
        addReposNumber()
        addFollsNumber()
        addFolliNumber()
    }


    return {
        editProfile,
        listRepos
    }
}
