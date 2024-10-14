const Creator = artifacts.require("creator");
const { TronWeb } = require("tronweb");

contract("Creator", (accounts) => {

    let creatorInstance;

    const [admin, participant1, participant2] = accounts;
    
    before(async () => {
        creatorInstance = await Creator.new();
    });

    describe("Deployment", () => {
        it("should deploy the contract and initialize ", async () => {
          const questCount = await creatorInstance.questId();
          console.log("The quest count is ", questCount)
          assert.equal(questCount.toNumber(), 0, "Initial quest count is 0");
        });
    });

    describe("Create Quest", () => {
        it("A user creates a new quest", async () => {
            const title = "Twitter Thread";
            const description = "Creta a twitter thread for the orgaization";
            const deadline = "Tomorrow";
            const linkToQuest = "https://www.x.xom/artquest";
            const prizePool = 1000;
            const paymentMode = "Tron transfer";
            const rankedReward = false;      // false if been unranked
            const price = 10000;   // TRX per day
            const participants = [participant1, participant2];

            const quest = await creatorInstance.addQuest(
                title,
                description,
                deadline,
                linkToQuest,
                prizePool,
                paymentMode,
                rankedReward,
                price,
                participants,
                {from: admin}
            );

            console.log("quest", quest)

            const questCount = await creatorInstance.questId();
            console.log("The quest count is ", questCount)
        })
        
    })


})