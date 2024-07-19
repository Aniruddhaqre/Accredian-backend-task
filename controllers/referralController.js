const {PrismaClient} = require("@prisma/client");
const { sendReferralEmail } = require("../services/mailService");

const prisma = new PrismaClient();

const createReferral = async (req, res) => {
  const { referrer, referee, email } = req.body;

  //data validation
  if (!referrer || !referee || !email) {
    res.status(400).send({ error: "Missing required feilds" });
  }

  //create and save referral in database
  try {
    const referral = await prisma.referral.create({
      data: { referrer, referee, email },
    });

    //send email to referee
    sendReferralEmail(referrer, referee, email);

    res.status(201).send(referral);
  } catch (error) {
    console.error("Error saving the refferal :", error);
    res.status(500).send("Internal Server Error!");
  }
};

module.exports = { createReferral };
