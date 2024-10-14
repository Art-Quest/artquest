// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

error Creator__NotOwner();
error InsufficientXP(uint256 currentXP);
error NotQuestAdmin();
error InsufficientFunds();
error QuestAlreadyCompleted();
error WinnersNotSet();

contract ArtQuest {
    
    // Events
    event NewQuest(uint256 questId);
    event QuestDeleted(uint256 questId);
    event NewPlayer(uint256 playerId);
    event QuestCompleted(uint256 questId);
    event ParticipantJoined(uint256 questId, address participant);
    event XPIncreased(address user, uint256 xpAdded);
    event WinnersSet(uint256 questId, address[] winners);
    event RewardDistributed(uint256 questId, address[] winners, uint256 rewardPerWinner);

    uint256 constant CREATE_QUEST_XP_COST = 100; // XP cost for creating a quest
    uint256 constant JOIN_QUEST_XP_COST = 50;    // XP cost for joining a quest

    // Structs for managing quests, players, and user profiles
    struct Quest {
        string title;
        string description;
        uint256 deadline;  // Timestamp for deadline
        string linkToQuest;
        uint256 prizePool;  // TRX or other token
        string paymentMode;
        bool rankedReward;
        uint256 price;  // Cost in TRX to join quest
        address admin;
        address[] participants;
        uint256 winnersCount;
        bool isActive;
        address[] winners;
    }

    struct UserProfile {
        string name;
        string username;
        address userAddress;
        string email;
        string bio;
        string[] socialLinks;  // Social media handles (X, Discord, etc.)
        string[] referrals;
        uint256 xp;  // Experience points (for Noodles game)
        uint256 balance; // Balance in the platform for rewards or purchases
    }

    struct Player {
        string name;
        address playerAddress;
        uint256 xp; // Noodles game points
    }

    uint256 public questId;  // Counter for quests
    uint256 public playerId;  // Counter for players
    address public owner;

    // Mappings
    mapping(uint256 => Quest) public quests;
    mapping(uint256 => Player) public players;
    mapping(address => UserProfile) public users;

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner!");
        _;
    }

    modifier onlyAdmin(uint256 _questId) {
        require(msg.sender == quests[_questId].admin, "Not the quest admin!");
        _;
    }

    // Constructor
    constructor() {
        owner = msg.sender;
    }


    /**
     * @dev Adds a new quest with specified parameters. Burns XP from the creator.
     */
    function addQuest(
        string memory _title, 
        string memory _description, 
         uint256 _deadline, // Timestamp format 
        string memory _linkToQuest, 
        uint256 _prizePool, 
        string memory _paymentMode, 
        bool _rankedReward, 
        uint256 _price,
        uint256 _winnersCount,
        address[] memory _participants,
        address[] memory _winners
    ) public payable returns (bool) {
        UserProfile storage userProfile = users[msg.sender];

        // Check if user has enough XP
        if (userProfile.xp < CREATE_QUEST_XP_COST) {
            revert InsufficientXP(userProfile.xp);
        }

        // Burn XP for creating a quest
        userProfile.xp -= CREATE_QUEST_XP_COST;

        // Create the quest
        Quest memory newQuest = Quest({
            title: _title,
            description: _description,
            deadline: _deadline,
            linkToQuest: _linkToQuest,
            prizePool: _prizePool,
            paymentMode: _paymentMode,
            rankedReward: _rankedReward,
            price: _price,
            admin: msg.sender,
            participants: _participants, // Initialize empty participants array
            winnersCount : _winnersCount,
            isActive: true,
            winners : _winners
        });

        quests[questId] = newQuest;
        emit NewQuest(questId);
        questId++;
        return true;
    }

    // Delete a quest by its admin
    function deleteQuest(uint256 _questId) public onlyAdmin(_questId) returns (bool) {
        quests[_questId].isActive = false;
        delete quests[_questId];
        emit QuestDeleted(_questId);
        return true;
    }

    // Players enter a quest
    function enterQuest(string memory _name) public payable {
        Player memory newPlayer = Player({
            name: _name,
            playerAddress: msg.sender,
            xp: 0 // Initial XP, can be updated by the Noodles game
        });

        players[playerId] = newPlayer;
        emit NewPlayer(playerId);
        playerId++;
    }

    /**
     * @dev Set the winners for a quest. Only the quest admin can do this.
     * The winners are selected manually by the admin, and this will allow for 
     * the distribution of rewards.
     */
    function setWinners(uint256 _questId, address[] memory _winners) external onlyAdmin(_questId) {
        Quest storage quest = quests[_questId];

        // Ensure the quest is completed
        require(quest.isActive == false, "Quest is already completed.");

        // Ensure the number of winners matches the quest's winner count
        require(_winners.length == quest.winnersCount, "Winner count does not match the specified number.");

        // Set winners for the quest
        quest.winners = _winners;

        emit WinnersSet(_questId, _winners);
    }

    /**
     * @dev Allows users to join a quest. Burns XP from the user.
     */
    function joinQuest(uint256 _questId) external {
        require(quests[_questId].isActive, "Quest is not active.");
        require(block.timestamp < quests[_questId].deadline, "Quest has expired.");

        UserProfile storage userProfile = users[msg.sender];

        // Check if user has enough XP to join
        if (userProfile.xp < JOIN_QUEST_XP_COST) {
            revert InsufficientXP(userProfile.xp);
        }

        // Burn XP for joining a quest
        userProfile.xp -= JOIN_QUEST_XP_COST;

        // Add the user to the quest's participant list
        Quest storage quest = quests[_questId];
        quest.participants.push(msg.sender);
        emit ParticipantJoined(_questId, msg.sender);
    }

    // // Complete a quest and distribute rewards
    // function completeQuest(uint256 _questId) public onlyAdmin(_questId) {
    //     require(quests[_questId].isActive, "Quest is already completed or deleted.");
    //     quests[_questId].isActive = false;

    //     if (quests[_questId].rankedReward) {
    //         // Distribute ranked rewards logic here
    //     } else {
    //         uint256 rewardPerParticipant = quests[_questId].prizePool / quests[_questId].participants.length;
    //         for (uint256 i = 0; i < quests[_questId].participants.length; i++) {
    //             payable(quests[_questId].participants[i]).transfer(rewardPerParticipant);
    //         }
    //     }

    //     emit QuestCompleted(_questId);
    // }

    /**
     * @dev Complete a quest and trigger the reward distribution.
     */
    function completeQuest(uint256 _questId) external onlyAdmin(_questId) {
        Quest storage quest = quests[_questId];

        require(!quest.isActive, "Quest already completed or no longer active.");

        // Mark the quest as completed
        quest.isActive = false;

        // Call reward distribution after winners are set
        require(quest.winners.length > 0, "Winners not set. Cannot distribute rewards.");
        distributeRewards(_questId);

        emit QuestCompleted(_questId);
    }

    /**
     * @dev Distribute the rewards to the winners after quest completion.
     * This function is called only after winners have been set.
     */
    function distributeRewards(uint256 _questId) private {
        Quest storage quest = quests[_questId];

        // Ensure the quest has been completed and winners are set
        require(!quest.isActive, "Quest is not completed yet.");
        require(quest.winners.length > 0, "Winners not set. Cannot distribute rewards.");

        uint256 rewardPerWinner = quest.prizePool / quest.winnersCount;

        // Distribute the rewards to the winners
        for (uint256 i = 0; i < quest.winners.length; i++) {
            address winner = quest.winners[i];
            (bool sent, ) = winner.call{value: rewardPerWinner}("");
            require(sent, "Reward distribution failed.");
        }

        emit RewardDistributed(_questId, quest.winners, rewardPerWinner);
    }

    // /**
    //  * @dev Distribute the rewards to the winners after quest completion.
    //  */
    // function distributeRewards(uint256 _questId) private {
    //     Quest storage quest = quests[_questId];

    //     // Check if the quest has been completed
    //     require(quest.isCompleted, "Quest is not completed yet.");

    //     uint256 winnersCount = quest.winnersCount;
    //     uint256 prizePool = quest.prizePool;

    //     // Check if there are enough participants
    //     uint256 totalParticipants = quest.participants.length;
    //     require(totalParticipants >= winnersCount, "Not enough participants for the winners.");

    //     uint256 rewardPerWinner = prizePool / winnersCount;

    //     // Select the winners (For simplicity, we select the first `winnersCount` participants)
    //     address[] memory winners = new address[](winnersCount);

    //     for (uint256 i = 0; i < winnersCount; i++) {
    //         winners[i] = quest.participants[i];
    //     }

    //     // Distribute the rewards to the winners
    //     for (uint256 i = 0; i < winnersCount; i++) {
    //         address winner = winners[i];
    //         (bool sent, ) = winner.call{value: rewardPerWinner}("");
    //         require(sent, "Reward distribution failed.");
    //     }

    //     emit RewardDistributed(_questId, winners, rewardPerWinner);
    // }

     /**
     * @dev Get active quests that can be joined.
     */
    function getActiveQuests() external view returns (Quest[] memory) {
        uint256 activeCount = 0;

        // Count active quests
        for (uint256 i = 0; i < questId; i++) {
            if (quests[i].isActive) {
                activeCount++;
            }
        }

        // Store active quests in an array
        Quest[] memory activeQuests = new Quest[](activeCount);
        uint256 index = 0;

        for (uint256 i = 0; i < questId; i++) {
            if (quests[i].isActive) {
                activeQuests[index] = quests[i];
                index++;
            }
        }

        return activeQuests;
    }

    // Add user profiles
    function createUserProfile(
        string memory _name,
        string memory _username,
        string memory _email,
        string memory _bio,
        string[] memory _socialLinks,
        string[] memory _referrals
    ) public {
        UserProfile memory newUser = UserProfile({
            name: _name,
            username: _username,
            userAddress: msg.sender,
            email: _email,
            bio: _bio,
            socialLinks: _socialLinks,
            referrals:  _referrals,
            xp: 50, // Initial xp for users
            balance: 0
        });

        users[msg.sender] = newUser;
    }



    // Burn points to enter quest or perform activities
    function burnPoints(address _user, uint256 _amount) public {
        require(users[_user].xp >= _amount, "Not enough points to burn.");
        users[_user].xp -= _amount;
    }

    // Add XP for playing the Noodles game
    function addXp(address _user, uint256 _xp) public {
        users[_user].xp += _xp;
    }

     /**
     * @dev Increases the XP of a user. Only the owner can call this function.
     * @param _user Address of the user whose XP will be increased.
     * @param _xpAmount Amount of XP to add to the user.
     */
    function increaseXP(address _user, uint256 _xpAmount) external onlyOwner {
        UserProfile storage userProfile = users[_user];
        userProfile.xp += _xpAmount;

        emit XPIncreased(_user, _xpAmount);
    }
}
