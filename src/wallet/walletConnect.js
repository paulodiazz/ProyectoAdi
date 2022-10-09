import { ethers } from "ethers" ;
import { createClient } from 'urql';
import { useState } from "react";


const API_URL = 'https://api-mumbai.lens.dev';
const client = createClient({
    url: API_URL
});

async function requestChallengeQuery(address){
    const challengeQuery = `query Challenge {
        challenge(request: { address: "${address}"  }) {
        text
        } 
        }`
    
    const response = await client.query(challengeQuery).toPromise()
    return response.data.challenge.text
} 

async function authenticateQuery(address,signature){
    const authenticationQuery = `
    mutation Authenticate {
    authenticate(request: {
        address: "${address}",
        signature: "${signature}"
    }) {
        accessToken
        refreshToken
    }
    }`
    const response = await client.mutation(authenticationQuery).toPromise()
    return response
}


export async function signText(provider,address,connection,text){

  let signature = undefined
  const signer = provider.getSigner()

  if (connection.wc) {
    signature = await provider.send(
        'personal_sign',
        [ ethers.utils.hexlify(ethers.utils.toUtf8Bytes(text)), address.toLowerCase() ]
    );
  }
  else { 
    signature = await signer.signMessage(text)
  }

  return signature

}

export async function handleAuth(connection,provider) {
  const address = (await connection.eth.getAccounts())[0]

  let challengeText = await requestChallengeQuery(address)

  let signature = await signText(provider,address,connection,challengeText)  
  
  const response = await authenticateQuery(address,signature)

  console.log({response})
}

