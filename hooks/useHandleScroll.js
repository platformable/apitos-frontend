export default function useHandleScroll() {
  return (e) => {
    e.preventDefault();
    // console.warn(e.target.getAttribute("data-next-target"))
    const target = e.target.getAttribute("data-next-target")
    const location = document.querySelector(target).offsetTop
    console.log('location',location);
  };
}
