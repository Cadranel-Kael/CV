export function slideScroll(elementId: string, speed: number = 1) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--carousel-width', `${window.scrollY * speed}%`)
    });
}