export default function useMoveToRevalidate() {
  return (id) => {
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.click();
  };
}
