//Create a stopwatch object that has four properties and three methods

stopwatch = {
shape:'round'

}

stopwatch.color='gray'
stopwatch.type='digital'
stopwatch.brand='apple'
stopwatch.time=`${Date.toLocaleTimeString}`

stopwatch.tellTime = ()=> {
`the time is ${time}`
}

stopwatch.start = ()=> {
  console.log('beep beep start ')
}

stopwatch.stop =  ()=> {
  console.log('beep beep stop')
}