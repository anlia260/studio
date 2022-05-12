import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { ConcentratorAladdinAppDefinition } from './concentrator-aladdin.definition';
import { ConcentratorAladdinContractFactory } from './contracts';
import { EthereumConcentratorAladdinAcrvTokenFetcher } from './ethereum/concentrator-aladdin.acrv.token-fetcher';
import { EthereumConcentratorAladdinBalanceFetcher } from './ethereum/concentrator-aladdin.balance-fetcher';
import { EthereumConcentratorAladdinSingleStakingFarmContractPositionFetcher } from './ethereum/concentrator-aladdin.single-staking-farm.contract-position-fetcher';

@Register.AppModule({
  appId: 'concentrator-aladdin',
  providers: [
    ConcentratorAladdinAppDefinition,
    ConcentratorAladdinContractFactory,
    EthereumConcentratorAladdinBalanceFetcher,
    EthereumConcentratorAladdinAcrvTokenFetcher,
    EthereumConcentratorAladdinSingleStakingFarmContractPositionFetcher,
  ],
})
export class ConcentratorAladdinAppModule extends AbstractApp() {}
