function distanceFromHqInBlocks(blockNumber) {

    let blocks = 42 - blockNumber;

    blocks = Math.abs(blocks);

    return blocks;
}

function distanceFromHqInFeet(blockNumber1) {
    let answerInFeet = (blockNumber1-42)*264
    answerInFeet = Math.abs(answerInFeet);
    return answerInFeet;
}

function distanceTravelledInFeet(blockNumber1, blockNumber2) {
    let distanceInFeet = (blockNumber1-blockNumber2)*264
    distanceInFeet = Math.abs(distanceInFeet);
    return distanceInFeet;
}


function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    let price = 0;

    console.log(`Distance is: ${distance}`);

    if (distance === 0) {
        return price;
    }
    
    else if (distance < 400) {
        return price;
    }
    else if (distance > 400 && distance <= 2000) {
        price = (distance-400)*0.02;
        return price;
    }
    else if (distance > 2000 && distance <= 2500) {
        return price = 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
    else {
        return "well this happened";
    }
    
}


console.log(calculatesFarePrice(22, 25));