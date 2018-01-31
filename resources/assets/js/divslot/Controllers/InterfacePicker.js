import NormalInterfaceController from './NormalInterfaceController';
import OldInterfaceController from './OldInterfaceController';

const exportedInterfaceController = (settings.gameType === 'old') ? OldInterfaceController : NormalInterfaceController;

export default exportedInterfaceController;
