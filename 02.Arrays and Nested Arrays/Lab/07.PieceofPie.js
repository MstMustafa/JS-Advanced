function pieveofPay(arr , start ,end)
{
    let indexStart = arr.indexOf(start)
    let endStart = arr.indexOf(end)
   
    let bagofFlowers= arr.slice(indexStart,endStart+1)

    return bagofFlowers


}
