
import { config } from '../../pusherConfig.js';
import Pusher from 'pusher-js';

const pusher = new Pusher(config.REACT_APP_PUSHER_CLUSTER, {
    cluster: config.REACT_APP_PUSHER_CLUSTER,
    encrypted: true,
});

export default pusher;