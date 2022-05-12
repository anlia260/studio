import { Inject } from '@nestjs/common';
import { TokenBalanceHelper } from '~app-toolkit';
import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { CONCENTRATOR_ALADDIN_DEFINITION } from '../concentrator-aladdin.definition';

const network = Network.ETHEREUM_MAINNET;

@Register.BalanceFetcher(CONCENTRATOR_ALADDIN_DEFINITION.id, network)
export class EthereumConcentratorAladdinBalanceFetcher implements BalanceFetcher {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(TokenBalanceHelper) private readonly tokenBalanceHelper: TokenBalanceHelper,
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
