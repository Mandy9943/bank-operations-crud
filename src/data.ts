import { data } from "./types/data.types";

const txns: data[] = [
  {
    date: "2019-11-29",
    description: "HACKERBANK1 BP DES: MERCH PMT ID:1358570",
    type: "Debit",
    amount: 1520.34,
    balance: "$12,234.45",
  },
  {
    date: "2019-12-01",
    description: "THE HACKERUNIVERSITY DES: CCD+ ID:0000232343",
    type: "Debit",
    amount: 1000,
    balance: "$12,234.45",
  },
  {
    date: "2019-11-25",
    description: "HACKERBANK DES:DEBIT O ID: 0000987945787897987987",
    type: "Credit",
    amount: 2450.45,
    balance: "$12,234.45",
  },
  {
    date: "2019-12-03",
    description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
    type: "Debit",
    amount: 1985.4,
    balance: "$12,234.45",
  },
  {
    date: "2019-11-29",
    description: "HACKERBANK DES: DEBIT O ID:00097494729",
    type: "Debit",
    amount: 564,
    balance: "$12,234.45",
  },
  {
    date: "2019-11-30",
    description: "CREDIT CARD PAYMENT ID: 222349083",
    type: "Credit",
    amount: 1987,
    balance: "$12,234.45",
  },
];

export default txns;