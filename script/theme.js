document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');



    /**
     * Cambia el tema oscuro en la p gina.
     * Si el tema oscuro est  actualmente habilitado, esto lo deshabilitar  y cambiar  al tema teal.
     * Si el tema oscuro est  actualmente deshabilitado, esto lo habilitar  y cambiar  del tema teal.
     * Esta funci n tambi n cambia el icono del bot n de cambio de tema entre un sol y una luna.
     */
    function toggleTheme() {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('bg-teal-600');
            body.classList.remove('bg-gray-900');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            body.classList.add('dark');
            body.classList.remove('bg-teal-600');
            body.classList.add('bg-gray-900');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', toggleTheme);

    /**
     * Recupera el tema actual desde localStorage y aplica el tema correspondiente.
     * Si el tema guardado es 'dark', se aplica el tema oscuro.
     */
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }


    /**
     * Guarda el tema actual en localStorage cuando se hace clic en el bot n de cambio de tema.
     * Si el tema actual es el tema oscuro, se guarda 'dark', en caso contrario se guarda 'light'.
     */
    themeToggle.addEventListener('click', () => {
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
});