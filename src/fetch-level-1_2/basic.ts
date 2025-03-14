//- Aufgabe 1
function fetchEmail() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP err! status: ${response.status}`);
            }
            return response.json();
        })
        .then((comments: Comment[]) => {
            interface Comment {
                postId: number;
                id: number;
                name: string;
                email: string;
                body: string;
            }

            console.log('▼▼▼ die E-Mail-Adressen aller Kommentierenden sind ▼▼▼ ');
            comments.forEach(comment => {
                console.log(comment.email);
            });
        })
        .catch(error => {
            console.error('error:', error);
        });
}

fetchEmail();


//- Aufgabe 2
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP err! status: ${response.status}`);
            }
            return response.json();
        })
        .then((posts: Post[]) => {

            interface Post {
                userId: number;
                id: number;
                title: string;
                body: string;
            }

            console.log(' ▼▼▼ all posts are ▼▼▼: ');
            posts.forEach(post => {
                console.log(post);
            });

            const maxId = Math.max(...posts.map(post => post.id));
            console.log('hoechste Post-Id: ', maxId);

            const shortestTitle = posts.reduce((shortest, current) => 
                current.title.length < shortest.title.length ? current : shortest
            ).title;
            console.log('kürzester Titel: ', shortestTitle);

            const longestBody = posts.reduce((longest, current) => 
                current.body.length > longest.body.length ? current : longest
            ).body;
            console.log('laengster Body: ', longestBody);
        })
        .catch(error => {
            console.error('if error: ', error);
        });
}

fetchPosts();