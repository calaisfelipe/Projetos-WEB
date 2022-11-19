//URL do fecth
const url = "https://jsonplaceholder.typicode.com/posts" 

//Seletores
const loadingElements = document.querySelector('#loading')
const PostsContainer = document.querySelector('#posts-container')

const PostPage = document.querySelector('#post')
const PostContainer = document.querySelector('#post-container')
const CommentContainer = document.querySelector('#coments-container')

const commentForm = document.querySelector('#coment-form')
const emailInput = document.querySelector('#iemail')
const bodyInput = document.querySelector('#body')

// Get id from URL

const urlSearchParams = new URLSearchParams(window.location.search)

const postId = urlSearchParams.get("id")


//Get all posts

async function getAllPosts(){
    const Allposts = await fetch(url)

    console.log(Allposts)

    const data = await Allposts.json()
    console.log(data)

    loadingElements.classList.add("hide") //Adiciona a classe hide definida no CSS - vai esconder o elemento

    data.map((post)=>{

        const div = document.createElement('div')
        const title = document.createElement('h2')
        const body = document.createElement('p')
        const link = document.createElement('a')

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = 'Ler'
        link.setAttribute('href', `/PROJETO04/post.html?id=${post.id}`)

        PostsContainer.appendChild(div)
        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)


    })
}

    //Get Individual post
    async function getPost(id){
        const [responsePost,responseComments] = await Promise.all([
            fetch(`${url}/${id}`),
            fetch(`${url}/${id}/comments`)
            ])

            const dataPost = await responsePost.json()
            console.log(dataPost)
            const dataComment = await responseComments.json()
            console.log(dataComment)

            loadingElements.classList.add('hide')
            PostPage.classList.remove('hide')

   
            const titulo = document.createElement('h1')
            const corpo = document.createElement('p')

            titulo.innerText = dataPost.title
            corpo.innerText = dataPost.body

            PostPage.appendChild(titulo)
            PostPage.appendChild(corpo)


            dataComment.map((dataComment) =>{
                
                const emailComment = document.createElement('p')
                const bodyComment = document.createElement('p')

                emailComment.innerText = dataComment.email
                emailComment.classList.add('paragrafemail')
                bodyComment.innerText = dataComment.body

                CommentContainer.appendChild(emailComment)
                CommentContainer.appendChild(bodyComment)

            }
            )
    }

    
    //INSERINDO UM COMENTARIO NO SISTEMA / POST A COMMENT

    async function postcomment(comment){
        
        const response = await fetch(`${url}/${postId}/comments`,{
            method: "POST",
            body: comment,
            headers: {
                "Content-type": "application/json"
            }
        })

        const data = await response.json()

        function CreateComment(comment){
            const titulo = document.createElement('p')
            const corpo = document.createElement('p')
    
            titulo.innerText = comment.email
            titulo.classList.add('paragrafemail')
            corpo.innerText = comment.body
    
            CommentContainer.appendChild(titulo)
            CommentContainer.appendChild(corpo)
    
    
            emailInput.value = ''
            bodyInput.value = ''
            }

       CreateComment(data)

    }
            
if (!postId){
    getAllPosts()    
}else{
    getPost(postId)

    // Add um evento adidicionar comentario

    commentForm.addEventListener('submit', (e) =>{
        e.preventDefault()

        let comment = {
            email: emailInput.value ,
            body: bodyInput.value
        }

        console.log(comment)

        comment = JSON.stringify(comment)

        postcomment(comment)

       
    })



}
