import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const CONCENTRATOR_ALADDIN_DEFINITION = appDefinition({
  id: 'concentrator-aladdin',
  name: 'concentrator-aladdin',
  description: 'AladdinDAO Project',
  url: 'https://concentrator.aladdin.club',
  groups: {
    acrv: { id: 'acrv', type: GroupType.TOKEN, label: 'ACrv' },
    singleStakingFarm: { id: 'single-staking-farm', type: GroupType.POSITION, label: 'Farms' },
  },
  tags: [AppTag.LIQUID_STAKING, AppTag.YIELD_AGGREGATOR],
  keywords: [],
  links: {
    learn: '',
    github: '',
    twitter: '',
    telegram: '',
    discord: '',
    medium: '',
  },
  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
  },
  token: {
    address: '0x2b95A1Dcc3D405535f9ed33c219ab38E8d7e0884',
    network: Network.ETHEREUM_MAINNET,
  },
  primaryColor: '#fff',
});

@Register.AppDefinition(CONCENTRATOR_ALADDIN_DEFINITION.id)
export class ConcentratorAladdinAppDefinition extends AppDefinition {
  constructor() {
    super(CONCENTRATOR_ALADDIN_DEFINITION);
  }
}

export default CONCENTRATOR_ALADDIN_DEFINITION;
