import {
  AUCTION_ID,
  METADATA_PROGRAM_ID,
  METAPLEX_ID,
  StringPublicKey,
  toPublicKey,
  VAULT_ID,
} from '@oyster/common/dist/lib/utils/ids';
import { AccountInfo, Connection, PublicKey, TokenBalance } from '@solana/web3.js';
import { AccountAndPubkey, MetaState, ProcessAccountsFunc } from './types';
import { isMetadataPartOfStore } from './isMetadataPartOfStore';
import { processAuctions } from './processAuctions';
import { processMetaplexAccounts } from './processMetaplexAccounts';
import { processMetaData } from './processMetaData';
import { processVaultData } from './processVaultData';
import {
  getEdition,
  getMultipleAccounts,
  MAX_CREATOR_LEN,
  MAX_CREATOR_LIMIT,
  MAX_NAME_LENGTH,
  MAX_SYMBOL_LENGTH,
  MAX_URI_LENGTH,
  Metadata,
  METADATA_PREFIX,
  ParsedAccount,
} from '@oyster/common';
import { MAX_WHITELISTED_CREATOR_SIZE } from '../../models/metaplex';

export const checkBalances = (
  m: ParsedAccount<Metadata>,
) => {
  console.log('Ok');
  if (!m?.pubkey) {
    return false;
  } else {
    // console.log(TokenBalance<Buffer>);
    return true
  }

};
