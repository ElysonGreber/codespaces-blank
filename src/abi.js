export const abiContrato = [
  {
    inputs: [],
    name: "pagarParaJogar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "escolha",
        type: "uint8",
      },
    ],
    name: "jogar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sacarPremio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "jogador",
        type: "address",
      },
    ],
    name: "verUltimoResultado",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "jogador",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "jogadorEscolha",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "contratoEscolha",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "resultado",
        type: "uint8",
      },
    ],
    name: "JogoRealizado",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "jogador",
        type: "address",
      },
    ],
    name: "verHistorico",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "jogadorEscolha",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "contratoEscolha",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "resultado",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PedraPapelTesoura.Jogada[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const abiERC20 = [{
            constant: false,
            inputs: [
                { name: "spender", type: "address" },
                { name: "value", type: "uint256" }
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            type: "function"
        },
        {
            constant: true,
            inputs: [{ name: "owner", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            type: "function"
        },
        {
            constant: true,
            inputs: [
                { name: "owner", type: "address" },
                { name: "spender", type: "address" }
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            type: "function"
        }
    ];