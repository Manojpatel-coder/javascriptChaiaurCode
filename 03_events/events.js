//piece of code occur when user perform some action
//onclick gives less features then eventLisntener ,event listener have varity of events
//obj.addEventListener(eventName,callback,true/false)//by defalut it is false
//it is event object which has many properties about the event like timestamp,event location ,target,tagName
//event lisetener by default behaviour is false which is works as eventbubbling means insideout (first inside event first then outside)
//if you change it to true then it will works as eventcapturing means outside to inside

//to stop these propagation stoppropagation() will be set

//to change the default behaviour of something the we use preventDefault()
//event.target selects the elemnt by whom event occur
//element.parentNode selects the parent of that element
//element.tagName gives the tag of element