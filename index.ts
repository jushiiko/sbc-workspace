import { ProgramNotRecognizedError } from '@metaplex-foundation/js';
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('3VvqqMpEcpr5ENcraijXQzUxcW6Voh2j1P7N4GcggCGnEZBqqWBMGaTf5wW1QSkvrkh8VAtkD5igxXJpVMW61e4B')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey("HUdEfMhmqGsXhuHjC6WwP2vsHd2Dqj5mX1vgyA9nSPB9");

    const publicKeyTo = new Web3.PublicKey("BTJCe4JRUEgCAwPMSSz3SMRRGLFNEhM6bhSr2K9u7XP6");

    const instruction = new Web3.TransactionInstruction({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1000000000,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair])
    console.log('txHash', txSignature)
}

main();