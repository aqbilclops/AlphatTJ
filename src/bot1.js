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
const auth = {auth}
	authToken: 'EE2TMJXkKIaKqQN2VW07.4QtqXCAK36D0RokmK620PW.7y63JNxV4WrGUSOk7o1ELCb4UYqAxksfqGONi3WZTkc=',
	certificate: 'aa50b8b7cc942641a33f0489d9600a25deece71f5cd4e163ca650445e7770057',
	email: 'brodolsilitss@gmail.com',
	password: 'akukamu133'
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
