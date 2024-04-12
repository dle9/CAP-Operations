/**
 * Author: Deric Le
 * Description: Handles the mouse controls of the App
 */

import errorSound from '../../../assets/sounds/error.mp3'

function useMouseControls (
    isLocked, 
    setIsLocked,
    itemActive,
    setItemActive,
) {
    const errorSoundEffect = new Audio(errorSound);

    // logic for clicking on thumbnails
    const handleClick = (index) => {
        // lock on current active thumbnail
        if (itemActive === index && !isLocked) {
            setIsLocked(!isLocked);
            const item = document.querySelector('.thumbnail .item.active');
            item.classList.toggle('active-border');
        }
        // unlock on current active thumbnail
        else if (itemActive === index && isLocked) {
            setIsLocked(!isLocked);
            const item = document.querySelector('.thumbnail .item.active');
            item.classList.toggle('active-border');
        }
        // click on any other thumbnail
        else if (itemActive != index && !isLocked) {
            setItemActive(index);
        }
        // locked! don't take actions
        else {
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake') ) {
                errorSoundEffect.play();
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    };

    return handleClick;
}
export default useMouseControls;