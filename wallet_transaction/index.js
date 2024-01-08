const USDTWallet = require("../model/Usdt-wallet")
const BTCWallet = require("../model/btc-wallet")
const ETHWallet = require("../model/eth-wallet")
const TRXWallet = require("../model/trx-wallet")
const DOGEWallet = require("../model/doge-wallet")
const LTCWallet = require("../model/ltc-wallet")
const BNBWallet = require("../model/bnb-wallet")

// ================ store USDt wallet details ===================
const handleDefaultWallet = (()=>{
    let wallet = [
        {
           is_active: false,
            balance: 0,
           coin_image:"https://nanogames.io/coin/BTC.black.png", 
           coin_name: "BTC", 
       },
       {
        is_active: false,   
        balance: 0,
        coin_image:"https://nanogames.io/coin/ETH.black.png", 
        coin_name: "ETH", 
       },
       {
        is_active: true,   
        balance: 200,
        coin_image:"https://nanogames.io/coin/TRX.black.png", 
        coin_name: "TRX", 
       },
       {
        is_active: false,   
        balance: 0,
        coin_image:"https://nanogames.io/coin/DOGE.black.png", 
        coin_name: "DOGE"
       },
        {
        is_active: false,   
        balance: 0,
        coin_image:"https://nanogames.io/coin/LTC.black.png", 
        coin_name: "LTC"
       },
       {
        is_active: false,   
        balance: 0,
        coin_image:"https://nanogames.io/coin/BNB.black.png", 
        coin_name: "BNB"
       },
       {
        is_active: false,   
        balance: 0,
        coin_image:"https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663", 
        coin_name: "USDT"
       }
   ]
   return wallet
})

const createBNB = (async(user_id)=>{
    let date = new Date()
    let balance = 0
    let coin_image = "https://nanogames.io/coin/BNB.black.png"
    let coin_fname =  "Binance Smart chain"
    let coin_name = "BNB"
    let data = {user_id, balance,date, coin_image, coin_fname, coin_name, is_active: false}
    await BNBWallet.create(data)
})

const createLTC = (async(user_id)=>{
    let date = new Date()
    let balance = 0
    let coin_image = "https://nanogames.io/coin/LTC.black.png"
    let coin_fname =  "Litcoin"
    let coin_name = "LTC"
    let data = {user_id, balance,date, coin_image, coin_fname, coin_name, is_active: false}
    await LTCWallet.create(data)
})

const createDOGE = (async(user_id)=>{
    let date = new Date()
    let balance = 0
    let coin_image = "https://nanogames.io/coin/DOGE.black.png"
    let coin_fname =  "DOGE"
    let coin_name = "DOGE"
    let data = {user_id, balance,date, coin_image, coin_fname, coin_name, is_active: false}
    await DOGEWallet.create(data)
})

// ================ store USDt wallet details ===================
const createUsdt = (async(user_id)=>{
    let balance =  0
    let now = new Date()
    let coin_image = "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663"
    let coin_name = "USDT"
    let coin_fname = "Tether"
    let date = now
    let data = {user_id, balance,date, coin_image, coin_fname, coin_name, is_active: false}
    await USDTWallet.create(data)
})

 // ================ store PPD wallet  details===================
 const createBTC = (async(user_id)=>{
    let now = new Date()
    let balance =  0.0000
    let coin_image ="https://nanogames.io/coin/BTC.black.png"
   let coin_fname = "Bitcoin"
    let coin_name = "BTC"
    let date = now
    let data = {user_id, balance,date, coin_image, coin_name,coin_fname, is_active: false}
    await BTCWallet.create(data)
})

// ================ store PPF wallet  details===================
const createETH = (async(user_id)=>{
    let now = new Date()
    let balance = 0
    let coin_image = "https://nanogames.io/coin/ETH.black.png"
    let coin_fname = "Ethereum"
    let coin_name = "ETH"
    let date = now
    let data = {user_id, balance, coin_image, coin_fname, coin_name, date, is_active: false}
    await ETHWallet.create(data)
})

// ================ store PPF wallet  details===================
const createTRX = (async(user_id)=>{
    let now = new Date()
    let balance = 200
    let coin_image = "https://nanogames.io/coin/TRX.black.png"
    let coin_fname =  "Trons"
    let coin_name = "TRX"
    let date = now
    let data = {user_id, balance,date, coin_image, coin_fname, coin_name, is_active: true}
    await TRXWallet.create(data)
})

module.exports = {createETH, createTRX, createBTC, createUsdt,createDOGE,createBNB,createLTC, handleDefaultWallet }