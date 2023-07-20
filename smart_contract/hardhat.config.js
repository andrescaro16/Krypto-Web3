require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
	solidity: '0.8.0',
	networks: {
		sepolia: {
			url: 'https://eth-sepolia.g.alchemy.com/v2/ol14aHtTt9H1SGVjUgjZiR6ax1ZLxN-y',
			accounts: [`${process.env.ACCOUNT_PRIVATE_API_KEY}`],
		},
	},
};
