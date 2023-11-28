import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('3VvqqMpEcpr5ENcraijXQzUxcW6Voh2j1P7N4GcggCGnEZBqqWBMGaTf5wW1QSkvrkh8VAtkD5igxXJpVMW61e4B')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('HUdEfMhmqGsXhuHjC6WwP2vsHd2Dqj5mX1vgyA9nSPB9');
    const publicKeyTo = new Web3.PublicKey('Qnho8xDu695NUNMzfJAMUdWJjYRKRB4RrvdJS2zrUPG');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1000000000,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();