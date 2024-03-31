export const contractAddress = "0xab267A1CA0558904bAbc0A20865b600B5a1B26e4";
export const ABI = [
  {
    inputs: [{ internalType: "string", name: "_name", type: "string" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "cantSetResultGameHasNotBeenLocked", type: "error" },
  { inputs: [], name: "gameHasBeenLocked", type: "error" },
  { inputs: [], name: "invalidAmountPassed", type: "error" },
  { inputs: [], name: "noBetFound", type: "error" },
  { inputs: [], name: "numberOfGoalUserBetOnIsInvalid", type: "error" },
  { inputs: [], name: "onlyOwnerCanCallThisFunction", type: "error" },
  { inputs: [], name: "thisUserHasBeenPaid", type: "error" },
  { inputs: [], name: "youHaveAlreadyPlacedAbet", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newAmount",
        type: "uint256",
      },
    ],
    name: "betAmountHasIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_numberOfGoals",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "betHasBeenPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeOfFunctionCall",
        type: "uint256",
      },
    ],
    name: "contractHasBeenLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "newOwnerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_protocolCut",
        type: "uint256",
      },
    ],
    name: "protocolCutHasBeenSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountPaid",
        type: "uint256",
      },
    ],
    name: "refundHasBeenMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "resultHasBeenSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "userHaveBeenPaid",
    type: "event",
  },
  {
    inputs: [],
    name: "addToBetAmount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_numberOfGoal", type: "uint256" },
    ],
    name: "betNumberOfGoals",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_newName", type: "string" }],
    name: "changeContractName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_addressToCheck", type: "address" },
    ],
    name: "checkIsOwner",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfGoalUserBetOn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "returnContractName",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnIsGameLocked",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numberOfGoalToCheck",
        type: "uint256",
      },
    ],
    name: "returnNumberOfGoalsToTalAmountBet",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnProtocolCut",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnResult",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnTotalAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnUserAmountBet",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnUserEtherBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnUserHasBeenPaid",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnUserToHasBet",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setLockGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "setNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_protocolCut", type: "uint256" },
    ],
    name: "setProtocolCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_result", type: "uint256" }],
    name: "setResult",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];