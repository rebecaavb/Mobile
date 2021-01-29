import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000',
});

export default api;

/**
 * IOS com Emuladtor: localhost
 * IOS com físico: IP da máquina
 * Android com Emulator: localhost (adb reverse)
 * Android com Emulator: 10.0.2.2 (Android Studio)
 * Android com Emulator: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */