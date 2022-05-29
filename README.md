
# MEV Army Banner Contracts

This repository contains the smart contracts for the MEV Army Banner NFTs. You can mint them [here](https://mevbanners.x0rart.com).

## Overview

MEV Army Banners are an experimental NFT for the MEV Army community. The smart contracts in this repo leverage MEV Army on-chain trait data to know what legion your MEV Army NFT is in and mint you the appropriate legion banner.

MEV Army Banners are 100% on-chain ASCII images, customizable (within specific parameters), and "Legion Owned." "Legion Owned" means that if you customize/update your banner, it will change for everyone in that legion.

## Contracts

- `ASCIIGenerator.sol`: An on-chain ASCII generator

- `IASCIIGenerator.sol`: Interface for `ASCIIGenerator.sol`

- `IMEVArmyTraitData.sol`: Interface to interact with the MEV Army NFT on-chain traits. You can learn more about the on-chain trait [here](https://michael-blau.gitbook.io/mev-army-trait-data-documentation/).

- `MEVArmyBanners.sol`: Manifold Extension to mint MEV Army Banners. This contract also holds the state for updating MEV Army Banners (i.e., ASCII text color and the ASCII number used in the MEV Army Banner artwork).

## Disclaimer

_These smart contracts are being provided as is. No guarantee, representation or warranty is being made, express or implied, as to the safety or correctness of the user interface or the smart contracts. They have not been audited and as such there can be no assurance they will work as intended, and users may experience delays, failures, errors, omissions or loss of transmitted information. THE SMART CONTRACTS CONTAINED HEREIN ARE FURNISHED AS IS, WHERE IS, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTY OF MERCHANTABILITY, NON- INFRINGEMENT OR FITNESS FOR ANY PARTICULAR PURPOSE. Further, use of any of these smart contracts may be restricted or prohibited under applicable law, including securities laws, and it is therefore strongly advised for you to contact a reputable attorney in any jurisdiction where these smart contracts may be accessible for any questions or concerns with respect thereto. Further, no information provided in this repo should be construed as investment advice or legal advice for any particular facts or circumstances, and is not meant to replace competent counsel. x0r labs LLC is not liable for any use of the foregoing, and users should proceed with caution and use at their own risk._