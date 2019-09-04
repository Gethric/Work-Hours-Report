

export const deleteListItem = (selectorID) => {

    const el = document.getElementById(selectorID);
    el.parentNode.removeChild(el);
};