import { Inject } from '@nestjs/common';
import { TokenBalanceHelper } from '~app-toolkit';
import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { ConcentratorAladdinContractFactory } from '../contracts';
import { CONCENTRATOR_ALADDIN_DEFINITION } from '../concentrator-aladdin.definition';

const appId = CONCENTRATOR_ALADDIN_DEFINITION.id;
const groupId = CONCENTRATOR_ALADDIN_DEFINITION.groups.acrv.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumConcentratorAladdinAcrvTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(TokenBalanceHelper) private readonly tokenBalanceHelper: TokenBalanceHelper,
    @Inject(ConcentratorAladdinContractFactory)
    private readonly concentratorAladdinContractFactory: ConcentratorAladdinContractFactory,
  ) {}

  private async getAcrvBalances(address: string) {
    return await this.tokenBalanceHelper.getTokenBalances({
      network: Network.ETHEREUM_MAINNET,
      appId: CONCENTRATOR_ALADDIN_DEFINITION.id,
      groupId: CONCENTRATOR_ALADDIN_DEFINITION.groups.acrv.id,
      address,
    });
  }

  async getPositions() {
    return [];
  }

  async getBalances(address: string) {
    const [acrvBalances] = await Promise.all([this.getAcrvBalances(address)]);

    return presentBalanceFetcherResponse([
      {
        label: 'Jars',
        assets: acrvBalances,
      },
    ]);
  }
}
