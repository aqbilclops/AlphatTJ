const LineAPI  = require('./api');
var config = require('./config');
var moment = require('moment');

class LineConnect extends LineAPI {

  constructor(options) {
    super();

    if (typeof options !== 'undefined') {
      this.authToken = options.authToken;
	  this.email = options.email;
	  this.password = options.password;
      this.certificate = options.certificate;
      this.config.Headers['X-Line-Access'] = options.authToken;
    }
  }
  
  getQrFirst() {
    return new Promise((resolve,reject) => {
      this._qrCodeLogin().then(async (res) => {
        this.authToken = res.authToken;
        this.certificate = res.certificate;
        console.info(`[*] Token: ${this.authToken}`);EEzeXdmh4vZWe7SooS17.4QtqXCAK36D0RokmK620PW.pLT/9hPO2pCQ7CcK7+pnFKFc2T7ViZDmLu9ExwpUAck=
        console.info(`[*] Certificate: ${res.certificate}`);aa50b8b7cc942641a33f0489d9600a25deece71f5cd4e163ca650445e7770057
        let { mid, displayName } = await this._client.getProfile();config.botmid = mid;ue2a4d0c5c6a4dfa774ace28c93adb4a7
        console.info(`[*] ID: ${mid}`);ue2a4d0c5c6a4dfa774ace28c93adb4a7
        console.info(`[*] Name: ${displayName}`);yours ddy
        await this._tokenLogin(this.authToken, this.certificate);EEzeXdmh4vZWe7SooS17.4QtqXCAK36D0RokmK620PW.pLT/9hPO2pCQ7CcK7+pnFKFc2T7ViZDmLu9ExwpUAck=, aa50b8b7cc942641a33f0489d9600a25deece71f5cd4e163ca650445e7770057
		await this._chanConn();
		let icH = await this._channel.issueChannelToken("1341209850");config.chanToken = icH.channelAccessToken;
		let xxc = icH.expiration;let xcc = xxc.toString().split(" ");let xc = xcc.toString();
		let expireCH = moment("/Date("+xc+"-0700)/").toString();
		console.info("[*] ChannelToken: "+icH.channelAccessToken);VgG5a1MotGVEhbYWmHOLFh+taDmOjJBqZm34aUtD8na34Gl+RKd4Ga84SSgi30KUaEcNJbAnV9p8VPKrUfCknc9WSJEkzTsYegvpKiO7hY+XQW8g8V0FTwD7YOLZQ2ox5nDnx4TNLgo27PxWGxlrgVQqTK4DRrqa3GpIq8RE2HdwZil231bU8/I8EWoHOWsV
		console.info("[*] ChannelTokenExpire: "+expireCH+"\n");
		console.info(`NOTE: Dont forget , put your admin mid on variable 'myBot' in main.js \n`);ue2a4d0c5c6a4dfa774ace28c93adb4a7
        console.info(`Regrads Alfathdirk and thx for TCR Team \n`);
        console.info(`=======LINE AlphatJS (TJ)======\n`);
        resolve();
      });
    });
  }

  async startx () {
    if (this.authToken){
		return new Promise((resolve, reject) => {
		    this._tokenLogin(this.authToken, this.certificate);
		    this._chanConn();
		    this._channel.issueChannelToken("1341209850",(err, result)=>{
				config.chanToken = result.channelAccessToken;
				this._client.getLastOpRevision((err,result)=>{
					let xrx = result.toString().split(" ");
					this.revision = xrx[0].toString() - 1;
					resolve(this.longpoll());
				})
			});
        });
    } else if(this.password && this.email){
		return new Promise((resolve, reject) => {
			this._xlogin(this.email,this.password).then(()=>{
				this._chanConn();
				console.info("Success Login!");
				console.info(`\n[*] Token: ${config.tokenn}`);
				this.config.Headers['X-Line-Access'] = config.tokenn;
				this._channel.issueChannelToken("1341209850",(err, result)=>{
					config.chanToken = result.channelAccessToken;
					this._client.getLastOpRevision((err,result)=>{
					    let xrx = result.toString().split(" ");
					    this.revision = xrx[0].toString() - 1;
					    resolve(this.longpoll());
				    })
				});
			})
        });
	} else {
      return new Promise((resolve, reject) => {
        this.getQrFirst().then(async (res) => {
          this._client.getLastOpRevision((err,result)=>{
			let xrx = result.toString().split(" ");
			this.revision = xrx[0].toString() - 1;
			resolve(this.longpoll());
		  })
        });
      })
    }
  }
  
  async fetchOps(rev) {
    return this._fetchOps(rev, 5);
  }

  async fetchOperations(rev) {
    return this._fetchOperations(rev, 5);
    
  }

  longpoll() {
    return new Promise((resolve, reject) => {
      this._fetchOps(this.revision, 5).then((operations) => {
        if (!operations) {
          console.log('No operations');
          reject('No operations');
          return;
        }
        return operations.map((operation) => {
              if(operation.revision.toString() != -1) {
                let revisionNum = operation.revision.toString();
                resolve({ revisionNum, operation });
              }
        });
      });
    });
  }

}

module.exports = LineConnect;
