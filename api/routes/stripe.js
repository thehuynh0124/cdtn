const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("pk_test_51Kz1UzAxCpOAdfMsbxmgJ1sZ9gE4PLSJoJ5OgK3jsGwkaWUFGRIK3e9rx9J1OhBHRf5F3dPeMvlWNF4rV73igBUS00oO13xjFY");
const cors = require("cors")

router.post("/payment",cors(), (req, res) => {
  try {
		stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
			currency: "USD",
		})
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
});

module.exports = router;