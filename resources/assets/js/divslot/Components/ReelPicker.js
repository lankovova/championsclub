import spinReel from './SpinReel';
import fallReel from './FallReel';

const exportedReel = settings.animationType === 'fall' ? fallReel : spinReel;

export default exportedReel;