import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { ContractPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { ConcentratorAladdinContractFactory } from '../contracts';
import { CONCENTRATOR_ALADDIN_DEFINITION } from '../concentrator-aladdin.definition';

const appId = CONCENTRATOR_ALADDIN_DEFINITION.id;
const groupId = CONCENTRATOR_ALADDIN_DEFINITION.groups.singleStakingFarm.id;
const network = Network.ETHEREUM_MAINNET;

@Register.ContractPositionFetcher({ appId, groupId, network })
export class EthereumConcentratorAladdinSingleStakingFarmContractPositionFetcher implements PositionFetcher<ContractPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(ConcentratorAladdinContractFactory) private readonly concentratorAladdinContractFactory: ConcentratorAladdinContractFactory,
  ) {}

  async getPositions() {
    return [];
  }
}
