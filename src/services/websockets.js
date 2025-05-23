import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

export const echo=window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "c8b2d1f58eac0ada1b53",
    cluster: "eu",
    forceTLS: true
});