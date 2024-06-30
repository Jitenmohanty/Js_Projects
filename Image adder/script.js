// Carousel setup the image interval of two second
document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextImage() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    // Initialize the first image as active
    carouselItems[currentIndex].classList.add('active');

    // Change the image every 2 seconds
    setInterval(showNextImage, 2000);

    // Image upload setup
    const dropzone = document.getElementById("dropzone");
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    let images = JSON.parse(localStorage.getItem("images")) || [];

    // Initial display of images from local storage
    images.forEach((imageData) => {
        addImageToDOM(imageData);
    });
//Drag and drop file functionality
    dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        
        dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        handleFiles(e.dataTransfer.files);
    });

    //File input functionality

    fileInput.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
        handleFiles(fileInput.files);
        console.log("object")
        fileInput.value = ""; // Clear the input value to ensure change event can be triggered again
    });

//File adding validation Like--->Maximum 5 file add size of image must me lessthan 1MB,

    function handleFiles(files) {
        if (images.length + files.length > 5) {
            alert("You can upload a maximum of 5 images.");
            return;
        }

        Array.from(files).forEach((file) => {
            if (file.type.startsWith("image/") && file.size <= 1 * 1024 * 1024) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageData = {
                        id: new Date().getTime(),
                        src: e.target.result,
                        description: "",
                    };
                    images.push(imageData);
                    addImageToDOM(imageData);
                    saveToLocalStorage();
                };
                reader.readAsDataURL(file);
            } else {
                alert("File must be an image and less than 1 MB.");
            }
        });
    }

    //Add images to the DOM after select or drag a file

    function addImageToDOM(imageData) {
        const div = document.createElement("div");
        div.className = "file-item";
        div.dataset.id = imageData.id;
        div.innerHTML = `
            <div class="img">
                <img src="${imageData.src}" alt="Image">
                <textarea placeholder="Add description...">${imageData.description}</textarea>
            </div>
            <div class="icons">
                <span class="check">✔️</span>
                <span class="delete">❌</span>
            </div>
        `;
        fileList.appendChild(div);

        const textarea = div.querySelector("textarea");
        const checkIcon = div.querySelector(".check");
        const deleteIcon = div.querySelector(".delete");

        //Add the description event handler
        checkIcon.addEventListener("click", () => {
            alert("Description has been added.");
            textarea.disabled = true;
            updateDescription(imageData.id, textarea.value);
        });

        //Remove file from the dom also from local storage.
        deleteIcon.addEventListener("click", () => {
            deleteImage(imageData.id);
            fileList.removeChild(div);
        });
    }

    function updateDescription(id, description) {
        images = images.map((image) =>
            image.id === id ? { ...image, description } : image
        );
        saveToLocalStorage();
    }

    function deleteImage(id) {
        images = images.filter((image) => image.id !== id);
        saveToLocalStorage();
    }
// Localstorage save functionality.
    function saveToLocalStorage() {
        localStorage.setItem("images", JSON.stringify(images));
    }
});
