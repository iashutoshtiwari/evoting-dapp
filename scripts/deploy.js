async function main() {
  const Voting = await ethers.getContractFactory('Voting')

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(['Ashutosh', 'Ankur', 'Vaibhav', 'Vivek', 'Sagar'], 180)
  console.log('Contract address:', Voting_.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
