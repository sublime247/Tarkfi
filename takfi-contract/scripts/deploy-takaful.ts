// import hre from "hardhat";
// import { parseEther } from "viem";

// async function main() {
//     console.log("🚀 Deploying Takaful Insurance Contract...");

//     // Deploy the contract
//     const takafulInsurance = await hre.viem.deployContract("TakafulInsurance", [], {
//         value: parseEther("1"),
//         account: deployer.account,
//     });

//     console.log(`✅ TakafulInsurance deployed to:    ${takafulInsurance.address}`);

//     // Get the deployer account
//     const [deployer] = await hre.viem.getWalletClients();
//     console.log(`📋 Deployed by: ${deployer.account.address}`);

//     // Test basic functionality
//     console.log("\n🧪 Testing basic functionality...");

//     // Check platform fee rate
//     const feeRate = await takafulInsurance.platformFeeRate();
//     console.log(`💰 Platform fee rate: ${feeRate} basis points (${Number(feeRate) / 100}%)`);

//     // Check admin role
//     const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";
//     const isAdmin = await takafulInsurance.hasRole([DEFAULT_ADMIN_ROLE, deployer.account.address]);
//     console.log(`👤 Deployer is admin: ${isAdmin}`);

//     console.log("\n🎉 Deployment and basic tests completed successfully!");
//     console.log("\n📚 Next steps:");
//     console.log("1. Create your first policy using createPolicy()");
//     console.log("2. Submit claims using submitClaim()");
//     console.log("3. Process claims using processClaim()");
//     console.log("4. Close policies and distribute surplus using closePolicy()");

//     return {
//         contractAddress: takafulInsurance.address,
//         deployer: deployer.account.address
//     };
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//     .then((result) => {
//         console.log(`\n✨ Contract deployed successfully at: ${result.contractAddress}`);
//         process.exit(0);
//     })
//     .catch((error) => {
//         console.error("❌ Deployment failed:", error);
//         process.exit(1);
//     }); 