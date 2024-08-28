// Funciones de encriptación
const TextEncryptor = (() => {
    // Encriptar el texto
    const encryptText = () => {
        if (!validateInput()) return;
        const text = document.getElementById("inputText").value;
        const encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("outputText").value = encryptedText;
    };

    // Validar entrada
    const validateInput = () => {
        const inputText = document.getElementById("inputText");
        const errorMsg = document.getElementById("errorMsg");
        const regex = /^[a-z\s]*$/;

        if (!regex.test(inputText.value)) {
            errorMsg.style.display = "block";
            return false;
        } else {
            errorMsg.style.display = "none";
            return true;
        }
    };

    // Desencriptar el texto
    const decryptText = () => {
        if (!validateInput()) return;
        const text = document.getElementById("inputText").value;
        const decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("outputText").value = decryptedText;
    };

    // Copiar el texto al portapapeles
    const copyText = () => {
        const text = document.getElementById("outputText").value;
        navigator.clipboard.writeText(text).then(() => {
            alert("Texto copiado");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    };

    document.getElementById("encryptBtn").addEventListener("click", () => {
        TextEncryptor.encryptText();
        animateImage();
    });
    
    document.getElementById("decryptBtn").addEventListener("click", () => {
        TextEncryptor.decryptText();
        animateImage();
    });
    
    function animateImage() {
        const image = document.querySelector(".imagen_encriptado");
        image.classList.add("animate");
    
        setTimeout(() => {
            image.classList.remove("animate");
        }, 250);  // Duración de la animación
    }
    

    return {
        encryptText,
        decryptText,
        copyText,
    };
})();

// Asignar eventos a los botones
document.getElementById("encryptBtn").addEventListener("click", TextEncryptor.encryptText);
document.getElementById("decryptBtn").addEventListener("click", TextEncryptor.decryptText);
document.getElementById("copyBtn").addEventListener("click", TextEncryptor.copyText);


// Actualizar la posición del cursor personalizado basado en el movimiento del cursor nativo
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

// Cambiar el tamaño del cursor al interactuar con elementos interactivos (botones, enlaces, etc.)
document.querySelectorAll("button, a, textarea").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)";
    });
    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
    });
});
