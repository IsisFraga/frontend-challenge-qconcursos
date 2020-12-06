;(function(){
    const myUser = 'IsisFraga'
    const githubInfo = apiCall(myUser)
    const buildChallenge = buildChallengeFront()

    async function getReposFromGithub() {
        const getReposFromGithub = await githubInfo.getReposFromGithubService()
        buildChallenge.listRepos(getReposFromGithub, 'repo')
    }
    async function getFavsFromGithub() {
        const getFavsFromGithub = await githubInfo.getFavsFromGithubService()
        buildChallenge.listRepos(getFavsFromGithub, 'fav')
    }


    async function setProfile() {
        const getProfileFromGithub =  await githubInfo.getProfileFromGithubService()
        buildChallenge.editProfile(getProfileFromGithub)
    }
    
    function setButtons() {
        const reposButton = document.querySelector('#repos')
        const favsButton = document.querySelector('#favs')

        reposButton.addEventListener('click', getReposFromGithub)
        favsButton.addEventListener('click', getFavsFromGithub)
    }


    function init() {
        setProfile()
        setButtons()
    }

    init()
})()