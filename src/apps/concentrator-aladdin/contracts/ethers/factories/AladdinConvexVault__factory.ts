/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { AladdinConvexVault, AladdinConvexVaultInterface } from '../AladdinConvexVault';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_convexPid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: '_rewardTokens',
        type: 'address[]',
      },
    ],
    name: 'AddPool',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_reward',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum IAladdinConvexVault.ClaimOption',
        name: '_option',
        type: 'uint8',
      },
    ],
    name: 'Claim',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
    ],
    name: 'PausePoolDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
    ],
    name: 'PausePoolWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_percentage',
        type: 'uint256',
      },
    ],
    name: 'UpdateHarvestBountyPercentage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
    ],
    name: 'UpdatePlatform',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_feePercentage',
        type: 'uint256',
      },
    ],
    name: 'UpdatePlatformFeePercentage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: '_rewardTokens',
        type: 'address[]',
      },
    ],
    name: 'UpdatePoolRewardTokens',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_feePercentage',
        type: 'uint256',
      },
    ],
    name: 'UpdateWithdrawalFeePercentage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_zap',
        type: 'address',
      },
    ],
    name: 'UpdateZap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_shares',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_convexPid',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: '_rewardTokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_withdrawFeePercentage',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_platformFeePercentage',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_harvestBountyPercentage',
        type: 'uint256',
      },
    ],
    name: 'addPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'aladdinCRV',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'enum IAladdinConvexVault.ClaimOption',
        name: '_option',
        type: 'uint8',
      },
    ],
    name: 'claim',
    outputs: [
      {
        internalType: 'uint256',
        name: 'claimed',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'enum IAladdinConvexVault.ClaimOption',
        name: '_option',
        type: 'uint8',
      },
    ],
    name: 'claimAll',
    outputs: [
      {
        internalType: 'uint256',
        name: 'claimed',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'share',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
    ],
    name: 'depositAll',
    outputs: [
      {
        internalType: 'uint256',
        name: 'share',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minimumOut',
        type: 'uint256',
      },
    ],
    name: 'harvest',
    outputs: [
      {
        internalType: 'uint256',
        name: 'harvested',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_aladdinCRV',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_zap',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
    ],
    name: 'pausePoolDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
    ],
    name: 'pausePoolWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'pendingReward',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'pendingRewardAll',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'platform',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'poolInfo',
    outputs: [
      {
        internalType: 'uint128',
        name: 'totalUnderlying',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'totalShare',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'accRewardPerShare',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'convexPoolId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'lpToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'crvRewards',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'withdrawFeePercentage',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'platformFeePercentage',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'harvestBountyPercentage',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'pauseDeposit',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'pauseWithdraw',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolLength',
    outputs: [
      {
        internalType: 'uint256',
        name: 'pools',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_percentage',
        type: 'uint256',
      },
    ],
    name: 'updateHarvestBountyPercentage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_platform',
        type: 'address',
      },
    ],
    name: 'updatePlatform',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_feePercentage',
        type: 'uint256',
      },
    ],
    name: 'updatePlatformFeePercentage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: '_rewardTokens',
        type: 'address[]',
      },
    ],
    name: 'updatePoolRewardTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_feePercentage',
        type: 'uint256',
      },
    ],
    name: 'updateWithdrawFeePercentage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_zap',
        type: 'address',
      },
    ],
    name: 'updateZap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userInfo',
    outputs: [
      {
        internalType: 'uint128',
        name: 'shares',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'rewards',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'rewardPerSharePaid',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'enum IAladdinConvexVault.ClaimOption',
        name: '_option',
        type: 'uint8',
      },
    ],
    name: 'withdrawAllAndClaim',
    outputs: [
      {
        internalType: 'uint256',
        name: 'withdrawn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'claimed',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
    ],
    name: 'withdrawAllAndZap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'withdrawn',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_shares',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'enum IAladdinConvexVault.ClaimOption',
        name: '_option',
        type: 'uint8',
      },
    ],
    name: 'withdrawAndClaim',
    outputs: [
      {
        internalType: 'uint256',
        name: 'withdrawn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'claimed',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_shares',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
    ],
    name: 'withdrawAndZap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'withdrawn',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'zap',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minAmount',
        type: 'uint256',
      },
    ],
    name: 'zapAllAndDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minAmount',
        type: 'uint256',
      },
    ],
    name: 'zapAndDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

export class AladdinConvexVault__factory {
  static readonly abi = _abi;
  static createInterface(): AladdinConvexVaultInterface {
    return new utils.Interface(_abi) as AladdinConvexVaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AladdinConvexVault {
    return new Contract(address, _abi, signerOrProvider) as AladdinConvexVault;
  }
}
