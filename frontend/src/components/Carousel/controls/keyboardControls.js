/**
 * Author: Deric Le
 * Description: Handles the keyboard controls of the App
 */

import { useEffect, useCallback } from 'react';
import { errorSoundEffect } from './soundControls';

function useKeyboardControls (
    isLocked, setIsLocked,
    items, itemActive, setItemActive,
    carouselTimer
) {

    // handle right arrow movement
    // useCallback = next() remains the same function instance across renders unless its dependencies change. 
    const next = useCallback(() => {
        if (!isLocked) {
            setItemActive((itemActive + 1) % items.length);
        } else { // play warning animation
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake')) {
                errorSoundEffect.play();
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    }, [isLocked, itemActive, items.length, setItemActive]);

    // handle left arrow movement
    // useCallback = prev() remains the same function instance across renders unless its dependencies change. 
    const prev = useCallback(() => {
        if (!isLocked) {
            setItemActive((itemActive - 1 + items.length) % items.length);
        } else { // play warning animation
            const footer = document.querySelector('footer');
            if (!footer.classList.contains('footer-shake')) {
                errorSoundEffect.play();
                footer.classList.add('footer-shake');
                setTimeout(() => {
                    footer.classList.remove('footer-shake');
                }, 3000);
            }
        }
    }, [isLocked, itemActive, items.length, setItemActive]);

    const handleKeyUp = useCallback((event) => {
        if (event.key === 'ArrowLeft') {
            prev();
        } else if (event.key === 'ArrowRight') {
            next();
        } else if (event.key === ' ') {
            setIsLocked(!isLocked);
            const item = document.querySelector('.thumbnail .item.active');
            item.classList.toggle('active-border');
        }
    }, [isLocked, setIsLocked, next, prev]);

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp]);

    // automatic Carousel
    useEffect(() => {
        const refreshInterval = setInterval(() => {
            if (!isLocked) {
                next();
            }
        }, carouselTimer);

        return () => {
            clearInterval(refreshInterval);
        };
    }, [carouselTimer, isLocked, next]);
}

export default useKeyboardControls;