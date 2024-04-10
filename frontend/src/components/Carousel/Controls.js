/**
 * Author: Deric Le
 * Description: Handles the controls of the App
 */

import React, { useEffect, useCallback } from 'react';

function useControls (
    isSpacebarLocked, setIsSpacebarLocked,
    items, itemActive, setItemActive,
    timerInterval, setTimerInterval, autoCarouselTimer,
) {
    // handle right arrow movement
    // useCallback = next() remains the same function instance across renders unless its dependencies change. 
    const next = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive + 1) % items.length);
        } else { // play warning animation
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake')) {
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, autoCarouselTimer]);

    // handle left arrow movement
    // useCallback = prev() remains the same function instance across renders unless its dependencies change. 
    const prev = useCallback(() => {
        if (!isSpacebarLocked) {
            setItemActive((itemActive - 1 + items.length) % items.length);
        } else { // play warning animation
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake')) {
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    }, [isSpacebarLocked, itemActive, items.length, setItemActive, setTimerInterval, autoCarouselTimer]);

    const handleKeyUp = (event) => {
        if (event.key === 'ArrowLeft') {
            prev();
        } else if (event.key === 'ArrowRight') {
            next();
        } else if (event.key === ' ') {
            setIsSpacebarLocked(!isSpacebarLocked);
            const item = document.querySelector('.thumbnail .item.active');
            item.classList.toggle('active-border');
            setTimerInterval(autoCarouselTimer); // reset the timer when unlocked
        }
    };

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    });

    // automatic Carousel
    useEffect(() => {
        const refreshInterval = setInterval(() => {
            if (!isSpacebarLocked) {
                next();
            }
        }, timerInterval);

        return () => {
            clearInterval(refreshInterval);
        };
    }, [itemActive, timerInterval, isSpacebarLocked, next]);
}

export default useControls;