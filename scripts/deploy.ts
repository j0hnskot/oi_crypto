import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    return greeter;
}

// @ts-ignore
async function greet(greeter) {
    console.log("Greet: ", await greeter.greet());
}

deploy();