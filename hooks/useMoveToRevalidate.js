export default function useMoveToRevalidate (id) {
    const a = document.createElement('a');
    a.href = `#${id}`
    a.click()
}