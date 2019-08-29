let PageHeader = document.getElementById('Heading')
PageHeader.textContent = ('DOM Manipulation')

const showComment = () => {
    const commentVale = document.getElementById('comment').value
    document.getElementById(
        'comment-out'
    ).innerHTML = `<p><b>comment:</b> ${commentVale}</p>`
}
document.getElementById('comment-data').addEventListener('click', showComment)
document.getElementById('comment-add').innerHTML = `last modified: ${document.lastModified}`
document.getElementById('comment-id').innerHTML = `comment name: ${showComment.name}`


