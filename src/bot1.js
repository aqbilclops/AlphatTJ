const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Alphat JS\n\
Version: TJ VERSION\n\
Thanks to @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : This bot is made by @Alfathdirk @TCR_TEAM !");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
const auth = {
	authToken: 'EE6VGGMv9VGMR5o1BiV7.4QtqXCAK36D0RokmK620PW.pSclHjMvS4AzSDZz3W5ujkRyXiLO2m8iqJwu15gKGXs=',
	certificate: 'fe5f68c0464e3e78a0fbc4e8787ad155c4c0b14a339cc0a5b81f89eb483f1fa9',
	email: 'brodolsilitss@gmail.com',
	password: 'Akukamu123'
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
