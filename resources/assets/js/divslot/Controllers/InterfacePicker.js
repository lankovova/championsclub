import NormalInterfaceController from './NormalInterfaceController';
import OldInterfaceController from './OldInterfaceController';

const exportedInterface = (settings.gameType === 'old') ? OldInterfaceController : NormalInterfaceController;

export default exportedInterfaceController;
