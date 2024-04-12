/**
 * Author: Deric Le
 * Description: handle sounds controls
 */

// import notifSound from '../../assets/sounds/pop.mp3'
import notifSound from '../../../assets/sounds/bmm.mp3'
import errorSound from '../../../assets/sounds/error.mp3'

const notifSoundEffect = new Audio(notifSound);
const errorSoundEffect = new Audio(errorSound);

export { notifSoundEffect, errorSoundEffect };