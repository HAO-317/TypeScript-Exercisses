interface PicsumImage {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

async function fetchFoto(): Promise<void> {
    const response = await fetch('https://picsum.photos/v2/list');
    
    if (!response.ok) {
        console.error(`HTTP-err! Status- ${response.status}`);
        return;
    }

    const images: PicsumImage[] = await response.json();
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    let imageList = [...images];
    
    const controlDiv = document.querySelector('.control');
    if (!controlDiv) {
        console.error('Control container nicht gefunden');
        return;
    }
    
    controlDiv.innerHTML = `
        <select id="authorSelect">
            <option value="">Alle Autoren</option>
            ${[...new Set(images.map(img => img.author))]
                .map(author => `<option value="${author}">${author}</option>`).join('')}
        </select>
        <button id="sortAz">A-Z Sortieren</button>
        <button id="sortZa">Z-A Sortieren</button>
    `;

    function displayFoto(imagesToShow: PicsumImage[]) {
        const existingBoxes = gallery.querySelectorAll('box');
        existingBoxes.forEach(box => box.remove());
        
        imagesToShow.forEach(image => {
            const box = document.createElement('box');
            const img = document.createElement('img');
            img.src = `https://picsum.photos/id/${image.id}/${image.width}/${image.height}`;
            img.alt = `foto v. ${image.author}`;
            
            const caption = document.createElement('caption');
            caption.textContent = image.author;

            box.appendChild(img);
            box.appendChild(caption);
            gallery.appendChild(box);
        });
    }

    displayFoto(imageList);

    const authorSelect = document.getElementById('authorSelect');
    const sortAzBtn = document.getElementById('sortAz');
    const sortZaBtn = document.getElementById('sortZa');

    authorSelect.addEventListener('change', (e) => {
        const selectedAuthor = (e.target).value;
        imageList = selectedAuthor 
            ? images.filter(img => img.author === selectedAuthor)
            : [...images];
        displayFoto(imageList);
    });

    sortAzBtn.addEventListener('click', () => {
        imageList.sort((a, b) => a.author.localeCompare(b.author));
        displayFoto(imageList);
    });

    sortZaBtn.addEventListener('click', () => {
        imageList.sort((a, b) => b.author.localeCompare(a.author));
        displayFoto(imageList);
    });
}

fetchFoto();