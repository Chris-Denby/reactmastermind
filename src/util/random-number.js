const RandomNumberUtil = (minParam, maxParam)=>{
    const min = Math.ceil(minParam);
    const max = Math.floor(maxParam);
    return Math.floor(Math.random() * (max - min) + min); 
    // The maximum is exclusive and the minimum is inclusive
}

export default RandomNumberUtil;