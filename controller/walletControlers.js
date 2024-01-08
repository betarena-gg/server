const Wallet = require("../model/wallet")
const PPDWallet = require("../model/ltc-wallet")
const PPLWallet = require("../model/btc-wallet")
const PPFWallet = require("../model/bnb-wallet")

const USDTWallet = require("../model/Usdt-wallet")
const BTCWallet = require("../model/btc-wallet")
const ETHWallet = require("../model/eth-wallet")
const TRXWallet = require("../model/trx-wallet")
const DOGEWallet = require("../model/doge-wallet")
const LTCWallet = require("../model/ltc-wallet")
const BNBWallet = require("../model/bnb-wallet")


// ============= get wallet  ====================
const GetPPDWallet = (async(req, res)=>{
    const {user_id} = req.id;
    if (!user_id) {
      res.status(500).json({ error: "No user found" });
    }
    else {
      try {
        const users = await PPDWallet.find({user_id})
        res.status(200).json(users)
      } catch (err) {
        res.status(501).json({ message: err.message });
      }
    }
})

const GetPPFWallet = (async(req, res)=>{
    const {user_id} = req.id;
    if (!user_id) {
      res.status(500).json({ error: "No user found" });
    } else {
      try {
        const users = await PPFWallet.find({user_id})
        res.status(200).json(users)
      } catch (err) {
        res.status(501).json({ message: err.message });
      }
    }
})

const GetPPLWallet = (async(req, res)=>{
    const {user_id} = req.id;
    if (!user_id) {
      res.status(500).json({ error: "No user found" });
    } else {
      try {
        const users = await PPLWallet.find({user_id})
        res.status(200).json(users)
      } catch (err) {
        res.status(501).json({ message: err.message });
      }
    }
})

// const GetPPLWallet = (async(req, res)=>{
//     const {user_id} = req.id;
//     if (!user_id) {
//       res.status(500).json({ error: "No user found" });
//     } else {
//       try {
//         const users = await WGDWallet.find({user_id})
//         res.status(200).json(users)
//       } catch (err) {
//         res.status(501).json({ message: err.message });
//       }
//     }
// })

const GetUSDTWallet = (async(req, res)=>{
    const {user_id} = req.id;
    if (!user_id) {
      res.status(500).json({ error: "No user found" });
    } else {
      try {
        const users = await USDTWallet.find({user_id})
        res.status(200).json(users)
      } catch (err) {
        res.status(501).json({ message: err.message });
      }
    }
})

const GetDefaultWallet = (async(req, res)=>{
  const {user_id} = req.id;
  if (!user_id) {
    res.status(500).json({ error: "No user found" });
  } else {
    try {
      const users = await Wallet.find({user_id})
      res.status(200).json(users)
    } catch (err) {
      res.status(501).json({ message: err.message });
    }
  }
})

const UpdatedefaultWallet = (async(req, res)=>{
  const {user_id} = req.id;
  const data = req.body
  try {
  await USDTWallet.updateOne({ user_id }, {
    is_active: data.coin_name === "USDT" ? true : false
   });

   await BTCWallet.updateOne({ user_id }, {
    is_active: data.coin_name === "BTC" ? true : false
   });

   await TRXWallet.updateOne({ user_id }, {
    is_active: data.coin_name === "TRX" ? true : false
   });
   await DOGEWallet.updateOne({ user_id }, {
    is_active: data.coin_name === "DOGE" ? true : false
   });

   await ETHWallet.updateOne({ user_id }, {
    is_active: data.coin_name === "ETH" ? true : false
   });

   await BNBWallet.updateOne({ user_id }, {
    is_active: data.coin_name === "BNB" ? true : false
   });

   await LTCWallet.updateOne({ user_id }, {
    is_active: data.coin_name === "LTC" ? true : false
   });


  } catch (err) {
    res.status(501).json({ message: err.message });
  }
})

module.exports = {  GetPPDWallet, GetPPFWallet, GetPPLWallet, GetUSDTWallet, UpdatedefaultWallet, GetDefaultWallet, UpdatedefaultWallet}